import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Lightbulb, FileText, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  budget: string
  timeline: string
  projectType: string
  description: string
  hasDesigns: boolean
  hasBrandGuidelines: boolean
  needsMaintenance: boolean
  agreedToTerms: boolean
}

const initialFormData: FormData = {
  name: '',
  email: '',
  budget: '',
  timeline: '',
  projectType: '',
  description: '',
  hasDesigns: false,
  hasBrandGuidelines: false,
  needsMaintenance: false,
  agreedToTerms: false,
}

const budgetOptions = [
  { value: '$10k-$25k', label: '$10k – $25k', description: 'MVP / Small project' },
  { value: '$25k-$50k', label: '$25k – $50k', description: 'Full product build' },
  { value: '$50k-$100k', label: '$50k – $100k', description: 'Complex platform' },
  { value: '$100k+', label: '$100k+', description: 'Enterprise scale' },
]

const timelineOptions = [
  { value: 'asap', label: 'ASAP', description: 'Start immediately' },
  { value: '1-month', label: 'Within 1 month', description: 'Quick start' },
  { value: '2-3-months', label: '2-3 months', description: 'Planned launch' },
  { value: 'flexible', label: 'Flexible', description: 'No strict deadline' },
]

const projectTypes = [
  { value: 'web-app', label: 'Web Application', icon: '🌐' },
  { value: 'mobile-app', label: 'Mobile App', icon: '📱' },
  { value: 'ecommerce', label: 'E-Commerce', icon: '🛒' },
  { value: 'saas', label: 'SaaS Platform', icon: '☁️' },
  { value: 'enterprise', label: 'Enterprise Software', icon: '🏢' },
  { value: 'other', label: 'Other', icon: '✨' },
]

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateStep = useCallback((step: number): boolean => {
    const newErrors: Partial<FormData> = {}

    if (step >= 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    }

    if (step >= 2) {
      if (!formData.budget) newErrors.budget = 'Please select a budget range'
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline'
      if (!formData.projectType) newErrors.projectType = 'Please select a project type'
    }

    if (step >= 3) {
      if (!formData.description.trim()) newErrors.description = 'Please describe your vision'
      else if (formData.description.trim().length < 100) newErrors.description = 'Please provide at least 100 characters'
    }

    if (step >= 4) {
      if (!formData.agreedToTerms) newErrors.agreedToTerms = true
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return

    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setCurrentStep(5)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div key={1} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold mb-2">Let's get to know you</h3>
            <p className="text-ink-muted mb-8">We'll never share your info. Just need to know who to send the proposal to.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={errors.email}
              />
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div key={2} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold mb-2">Project Details</h3>
            <p className="text-ink-muted mb-8">Help us understand the scope so we can prepare an accurate proposal.</p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ink mb-3">Budget Range</label>
                <div className="grid gap-3" role="radiogroup" aria-label="Budget range">
                  {budgetOptions.map((option) => (
                    <motion.label
                      key={option.value}
                      className={cn(
                        'relative flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer',
                        formData.budget === option.value
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-border hover:border-cyan-500/50'
                      )}
                      whileHover={{ scale: 1.01 }}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option.value}
                        checked={formData.budget === option.value}
                        onChange={(e) => handleChange('budget', e.target.value)}
                        className="sr-only"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                      <div className="relative z-10 flex items-center justify-between w-full">
                        <div>
                          <div className="font-semibold text-ink">{option.label}</div>
                          <div className="text-sm text-ink-muted">{option.description}</div>
                        </div>
                        <div
                          className={cn(
                            'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                            formData.budget === option.value
                              ? 'bg-cyan-500 border-cyan-500 text-white'
                              : 'border-border text-transparent'
                          )}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
                {errors.budget && <p className="mt-2 text-sm text-error">{errors.budget}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-3">Timeline</label>
                <div className="grid gap-3" role="radiogroup" aria-label="Timeline">
                  {timelineOptions.map((option) => (
                    <motion.label
                      key={option.value}
                      className={cn(
                        'relative flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer',
                        formData.timeline === option.value
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-border hover:border-cyan-500/50'
                      )}
                      whileHover={{ scale: 1.01 }}
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={option.value}
                        checked={formData.timeline === option.value}
                        onChange={(e) => handleChange('timeline', e.target.value)}
                        className="sr-only"
                      />
                      <div className="relative z-10">
                        <div className="font-semibold text-ink">{option.label}</div>
                        <div className="text-sm text-ink-muted">{option.description}</div>
                      </div>
                      <div
                        className={cn(
                          'absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all',
                          formData.timeline === option.value
                            ? 'bg-cyan-500 border-cyan-500 text-white'
                            : 'border-border text-transparent'
                        )}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </motion.label>
                  ))}
                </div>
                {errors.timeline && <p className="mt-2 text-sm text-error">{errors.timeline}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-3">Project Type</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" role="radiogroup" aria-label="Project type">
                  {projectTypes.map((type) => (
                    <motion.label
                      key={type.value}
                      className={cn(
                        'relative flex flex-col items-center p-5 rounded-xl border-2 transition-all cursor-pointer text-center',
                        formData.projectType === type.value
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-border hover:border-cyan-500/50'
                      )}
                      whileHover={{ scale: 1.02 }}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type.value}
                        checked={formData.projectType === type.value}
                        onChange={(e) => handleChange('projectType', e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-3xl mb-2">{type.icon}</span>
                      <span className="font-medium text-ink">{type.label}</span>
                      <div
                        className={cn(
                          'absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full transition-all',
                          formData.projectType === type.value
                            ? 'bg-cyan-500 scale-100'
                            : 'bg-transparent scale-0'
                        )}
                      />
                    </motion.label>
                  ))}
                </div>
                {errors.projectType && <p className="mt-2 text-sm text-error">{errors.projectType}</p>}
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div key={3} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold mb-2">Your Vision</h3>
            <p className="text-ink-muted mb-8">The more detail you share, the better we can tailor our proposal.</p>

            <div className="space-y-6">
              <Textarea
                label="Project Description"
                placeholder="Describe your project, goals, target audience, key features, and any specific requirements... (minimum 100 characters)"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                error={errors.description}
                rows={6}
              />
              <p className="text-sm text-ink-muted text-right">
                {formData.description.length}/100 minimum
              </p>

              <div className="pt-4 border-t border-border-subtle">
                <h4 className="font-semibold mb-4">Additional Context</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { key: 'hasDesigns', label: 'I have designs/figma', description: 'Ready-to-implement designs' },
                    { key: 'hasBrandGuidelines', label: 'Brand guidelines exist', description: 'Logo, colors, typography defined' },
                    { key: 'needsMaintenance', label: 'Ongoing maintenance needed', description: 'Post-launch support & updates' },
                  ].map((item) => (
                    <motion.label
                      key={item.key}
                      className={cn(
                        'relative flex flex-col items-center p-5 rounded-xl border-2 transition-all cursor-pointer text-center',
                        (formData[item.key as keyof FormData] as boolean)
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-border hover:border-cyan-500/50'
                      )}
                      whileHover={{ scale: 1.01 }}
                    >
                      <input
                        type="checkbox"
                        checked={(formData[item.key as keyof FormData] as boolean)}
                        onChange={(e) => handleChange(item.key as keyof FormData, e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={cn(
                          'absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
                          (formData[item.key as keyof FormData] as boolean)
                            ? 'bg-cyan-500 border-cyan-500 text-white'
                            : 'border-border text-transparent'
                        )}
                      >
                        <CheckCircle className="w-3 h-3" />
                      </div>
                      <div className="relative z-10">
                        <div className="font-medium text-ink">{item.label}</div>
                        <div className="text-sm text-ink-muted">{item.description}</div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>
              {errors.description && <p className="text-sm text-error">{errors.description}</p>}
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div key={4} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold mb-2">Review & Submit</h3>
            <p className="text-ink-muted mb-8">Please review your information before submitting.</p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold flex items-center gap-2 mb-3">
                    <User className="w-5 h-5 text-cyan-400" />
                    Personal
                  </h4>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-ink-muted">Name</dt>
                      <dd className="font-medium">{formData.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-ink-muted">Email</dt>
                      <dd className="font-medium">{formData.email}</dd>
                    </div>
                  </dl>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-gold-400" />
                    Project
                  </h4>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-ink-muted">Budget</dt>
                      <dd className="font-medium">{formData.budget}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-ink-muted">Timeline</dt>
                      <dd className="font-medium">{timelineOptions.find(t => t.value === formData.timeline)?.label || formData.timeline}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-ink-muted">Type</dt>
                      <dd className="font-medium">{projectTypes.find(t => t.value === formData.projectType)?.label || formData.projectType}</dd>
                    </div>
                  </dl>
                </Card>
              </div>

              <Card className="p-4">
                <h4 className="font-semibold flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-green-400" />
                  Vision Summary
                </h4>
                <p className="text-sm text-ink-muted line-clamp-3">{formData.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {formData.hasDesigns && <Badge variant="default" size="sm">Has Designs</Badge>}
                  {formData.hasBrandGuidelines && <Badge variant="default" size="sm">Brand Guidelines</Badge>}
                  {formData.needsMaintenance && <Badge variant="default" size="sm">Maintenance Needed</Badge>}
                </div>
              </Card>
            </div>

            <motion.label className="flex items-start gap-3 p-4 rounded-xl border-2 transition-all cursor-pointer" whileHover={{ borderColor: 'rgba(0, 229, 255, 0.5)' }}>
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
                className="sr-only"
              />
              <div className={cn(
                'relative mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all',
                formData.agreedToTerms
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'border-border text-transparent'
              )}>
                <CheckCircle className="w-3 h-3" />
              </div>
              <div className="flex-1">
                <p className="font-medium">I agree to the <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a></p>
                <p className="text-sm text-ink-muted">We'll send your proposal within 24 hours. No spam, ever.</p>
              </div>
            </motion.label>
            {errors.agreedToTerms && <p className="text-sm text-error ml-8">You must agree to proceed</p>}
          </motion.div>
        )

      case 5:
        return (
          <motion.div key={5} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div className="text-center py-12">
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <CheckCircle className="w-10 h-10 text-green-400" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-3">Proposal Request Submitted!</h3>
              <p className="text-ink-muted mb-8 max-w-md mx-auto">
                Thank you! We've received your project details. Our team will review and send a tailored proposal within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" onClick={() => { setCurrentStep(1); setFormData(initialFormData); setSubmitStatus('idle'); }}>
                  Start Another Project
                </Button>
                <Button variant="secondary" size="lg" onClick={() => window.location.href = '#work'}>
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <section id="booking" className="relative py-section-lg px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 229, 255, 0.08) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)' }} />

      <div className="mx-auto max-w-3xl">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            Start a Project
          </span>
          <h2 className="font-display text-display-xl md:text-display-lg font-bold tracking-tight">
            Let's create your <span className="text-gradient-primary">next breakthrough</span>
          </h2>
          <p className="text-lg text-ink-muted mt-4 max-w-xl mx-auto">
            Limited capacity — we take on select projects each quarter to ensure exceptional quality.
          </p>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <form onSubmit={handleSubmit} className="relative">
            {renderStep()}
          </form>
        </AnimatePresence>

        {currentStep < 5 && (
          <motion.div
            className="flex justify-between pt-8 border-t border-border-subtle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              type="button"
              variant="secondary"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="w-full sm:w-auto"
            >
              ← Back
            </Button>
            <Button
              type="submit"
              size="lg"
              loading={isSubmitting}
              className="w-full sm:w-auto group relative overflow-hidden"
            >
              {currentStep === 4 ? 'Submit Request' : 'Continue'}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Something went wrong. Please try again or email us directly at webarchitects.co.in@gmail.com
          </motion.div>
        )}
      </div>
    </section>
  )
}