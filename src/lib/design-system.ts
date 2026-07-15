/**
 * WebArchitects Premium Design System
 * Synthesized from Linear, Stripe, Vercel, Framer design languages
 */

export const designSystem = {
  // ──────────────────────────────────────────────
  // COLOR SYSTEM
  // ──────────────────────────────────────────────
  colors: {
    // Canvas & Surfaces (Dark-first, Linear-inspired)
    canvas: '#030712',           // Near-black with blue tint
    surface: '#0a101d',          // Surface-1: lifted card surface
    surfaceElevated: '#111827',  // Surface-2: featured/hovers
    surfaceHigh: '#1e293b',      // Surface-3: inputs, dropdowns
    border: '#1e293b',           // Hairline borders
    borderStrong: '#334155',     // Stronger borders, focus
    borderSubtle: '#0f172a',     // Subtle dividers

    // Brand Accent (Linear-inspired single accent)
    primary: '#0ea5e9',          // Sky-500 - Single chromatic accent
    primaryHover: '#38bdf8',     // Sky-400
    primaryPress: '#0284c7',     // Sky-600
    primarySoft: '#7dd3fc',      // Sky-300 for subtle fills
    primaryBgSubdued: '#0c4a6e', // Sky-900/30 for tags
    primaryRing: '#0ea5e9',      // Focus rings

    // Text (Linear-inspired hierarchy)
    ink: '#f1f5f9',              // Primary text - near white
    inkMuted: '#94a3b8',         // Secondary - slate-400
    inkSubtle: '#64748b',        // Tertiary - slate-500
    inkTertiary: '#475569',      // Quaternary - slate-600
    onPrimary: '#030712',        // Text on primary

    // Gradient Atmosphere (Stripe/Vercel-inspired)
    gradientStart: '#0ea5e9',    // Sky-500
    gradientMid: '#8b5cf6',      // Violet-500
    gradientEnd: '#ec4899',      // Pink-500
    gradientAmber: '#f59e0b',    // Amber-500

    // Semantic
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
  },

  // ──────────────────────────────────────────────
  // TYPOGRAPHY
  // ──────────────────────────────────────────────
  typography: {
    fontFamilies: {
      display: 'Inter, system-ui, -apple-system, sans-serif',
      body: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
    },
    // Font feature settings for brand voice
    fontFeatures: {
      display: '"cv01", "cv05", "cv09", "cv11", "ss01", "ss03", "dlig"',
      body: '"cv11", "ss01", "tnum"',
      mono: '"tnum", "zero"',
    },
    // Letter spacing scale (negative tracking on display)
    letterSpacing: {
      'display-xxl': '-5.5px',   // 5% of 110px
      'display-xl': '-4.25px',   // 5% of 85px
      'display-lg': '-3.1px',    // 5% of 62px
      'display-md': '-1.0px',    // 2.5% of 40px
      'display-sm': '-0.6px',    // 2% of 28px
      headline: '-0.8px',        // 3.6% of 22px
      subhead: '-0.01px',        // Near neutral
      'body-lg': '-0.18px',      // -1% of 18px
      body: '-0.05px',           // Near neutral
      'body-sm': '0',            // Neutral
      caption: '0',              // Neutral
      micro: '0',                // Neutral
      button: '-0.14px',         // -1% of 14px
      'button-lg': '0',          // Neutral
      eyebrow: '0.4px',          // Positive for eyebrows
      code: '0',                 // Neutral
    },
  },

  // ──────────────────────────────────────────────
  // SPACING SYSTEM (4px base unit)
  // ──────────────────────────────────────────────
  spacing: {
    hair: '1px',
    xxs: '4px',    // 1
    xs: '8px',     // 2
    sm: '12px',    // 3
    md: '16px',    // 4
    lg: '24px',    // 6
    xl: '32px',    // 8
    xxl: '48px',   // 12
    xxxl: '64px',  // 16
    section: '96px',    // 24 - section vertical padding
    sectionLg: '128px', // 32 - large section padding
    container: '24px',  // 6 - horizontal container gutter
    containerLg: '32px', // 8 - large container gutter
  },

  // ──────────────────────────────────────────────
  // BORDER RADIUS
  // ──────────────────────────────────────────────
  radius: {
    xs: '4px',      // Small chips, badges
    sm: '6px',      // Inputs, inline tags
    md: '8px',      // Buttons, compact cards
    lg: '12px',     // Standard cards, pricing
    xl: '16px',     // Feature cards, mockups
    xxl: '30px',    // Atmospheric gradient cards
    pill: '100px',  // All CTAs, pill buttons
    full: '9999px', // Avatars, circular icons
  },

  // ──────────────────────────────────────────────
  // SHADOWS & ELEVATION (Stacked shadows, Linear/Vercel style)
  // ──────────────────────────────────────────────
  shadows: {
    none: 'none',
    // Inset hairline for card edges
    hairline: 'inset 0 0 0 1px rgba(30, 41, 59, 0.8)',
    // Subtle lift - Level 1
    subtle: '0 1px 2px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(30, 41, 59, 0.8)',
    // Card lift - Level 2 (Linear charcoal lift)
    card: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(30, 41, 59, 0.8)',
    // Floating - Level 3
    float: '0 12px 32px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(30, 41, 59, 0.8)',
    // Modal - Level 4
    modal: '0 24px 64px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(30, 41, 59, 0.8)',
    // Primary glow
    primaryGlow: '0 0 0 1px rgba(14, 165, 233, 0.3), 0 8px 24px rgba(14, 165, 233, 0.15)',
    primaryGlowLg: '0 0 0 1px rgba(14, 165, 233, 0.3), 0 20px 48px rgba(14, 165, 233, 0.2)',
    // Focus ring
    focus: '0 0 0 2px rgba(14, 165, 233, 0.5)',
  },

  // ──────────────────────────────────────────────
  // TRANSITIONS & MOTION
  // ──────────────────────────────────────────────
  motion: {
    durations: {
      instant: '0ms',
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
      section: '1200ms',
    },
    easings: {
      standard: 'cubic-bezier(0.16, 1, 0.3, 1)',      // Framer/Linear default
      spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      expo: 'cubic-bezier(0.19, 1, 0.22, 1)',         // Stripe-style
      'ease-out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    // GSAP-style quickTo configs for magnetic interactions
    magnetic: {
      strength: 0.3,
      duration: 0.4,
      ease: 'elastic.out(1, 0.4)',
    },
    // Scroll-triggered animations
    scroll: {
      scrub: 0.5,
      ease: 'none',
    },
  },

  // ──────────────────────────────────────────────
  // Z-INDEX SCALE
  // ──────────────────────────────────────────────
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
    toast: 700,
    cursor: 800,
  },

  // ──────────────────────────────────────────────
  // BREAKPOINTS
  // ──────────────────────────────────────────────
  breakpoints: {
    mobile: '480px',
    mobileLg: '640px',
    tablet: '768px',
    tabletLg: '960px',
    desktop: '1024px',
    desktopLg: '1280px',
    desktopXl: '1440px',
    wide: '1600px',
  },

  // ──────────────────────────────────────────────
  // CONTAINER WIDTHS
  // ──────────────────────────────────────────────
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
    full: '100%',
  },

  // ──────────────────────────────────────────────
  // COMPONENT SPECS
  // ──────────────────────────────────────────────
  components: {
    // Buttons
    button: {
      primary: {
        background: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1',
        letterSpacing: '-0.14px',
        padding: '10px 15px',
        borderRadius: 'var(--radius-pill)',
        transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: 'var(--shadow-primary-glow)',
      },
      secondary: {
        background: 'var(--color-surface)',
        color: 'var(--color-ink)',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1',
        letterSpacing: '-0.14px',
        padding: '10px 15px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--color-border)',
        transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      ghost: {
        background: 'transparent',
        color: 'var(--color-ink)',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1',
        letterSpacing: '-0.14px',
        padding: '10px 15px',
        borderRadius: 'var(--radius-pill)',
        transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      // Nav-scale buttons (smaller)
      navPrimary: {
        background: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '1',
        padding: '6px 12px',
        borderRadius: 'var(--radius-sm)',
        height: '28px',
      },
      navSecondary: {
        background: 'var(--color-canvas)',
        color: 'var(--color-ink)',
        fontSize: '13px',
        fontWeight: 500,
        lineHeight: '1',
        padding: '6px 12px',
        borderRadius: 'var(--radius-sm)',
        height: '28px',
        border: '1px solid var(--color-border)',
      },
    },

    // Cards
    card: {
      default: {
        background: 'var(--color-surface)',
        color: 'var(--color-ink)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-subtle)',
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      elevated: {
        background: 'var(--color-surface-elevated)',
        color: 'var(--color-ink)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-lg)',
        border: '1px solid var(--color-border-strong)',
        boxShadow: 'var(--shadow-card)',
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      featured: {
        background: 'var(--color-surface-high)',
        color: 'var(--color-ink)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--spacing-xl)',
        border: '1px solid var(--color-border-strong)',
        boxShadow: 'var(--shadow-float)',
        transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      gradientSpotlight: {
        background: 'linear-gradient(135deg, var(--color-gradient-mid) 0%, var(--color-gradient-end) 100%)',
        color: 'var(--color-ink)',
        borderRadius: 'var(--radius-xxl)',
        padding: 'var(--spacing-xxl)',
        boxShadow: 'var(--shadow-float)',
        transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      gradientSpotlightOrange: {
        background: 'linear-gradient(135deg, var(--color-gradient-amber) 0%, var(--color-gradient-end) 100%)',
        color: 'var(--color-ink)',
        borderRadius: 'var(--radius-xxl)',
        padding: 'var(--spacing-xxl)',
        boxShadow: 'var(--shadow-float)',
        transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },

    // Inputs
    input: {
      default: {
        background: 'var(--color-surface)',
        color: 'var(--color-ink)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.5',
        transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      focused: {
        background: 'var(--color-surface)',
        color: 'var(--color-ink)',
        border: '1px solid var(--color-primary)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.5',
        boxShadow: 'var(--shadow-focus)',
        transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },

    // Navigation
    nav: {
      bar: {
        background: 'var(--color-canvas)',
        color: 'var(--color-ink)',
        height: '56px',
        padding: '0 var(--spacing-lg)',
        borderBottom: '1px solid var(--color-border-subtle)',
        backdropFilter: 'blur(20px)',
        backgroundAlpha: 'rgba(3, 7, 18, 0.85)',
      },
      link: {
        color: 'var(--color-ink-muted)',
        fontSize: '14px',
        fontWeight: 500,
        padding: '8px 12px',
        borderRadius: 'var(--radius-pill)',
        transition: 'all 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },

    // Badges/Pills
    badge: {
      default: {
        background: 'var(--color-surface-high)',
        color: 'var(--color-ink-muted)',
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '1.2',
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
      },
      primary: {
        background: 'var(--color-primary-bg-subdued)',
        color: 'var(--color-primary-soft)',
        fontSize: '11px',
        fontWeight: 500,
        lineHeight: '1.15',
        letterSpacing: '0.1px',
        padding: '3px 8px',
        borderRadius: 'var(--radius-pill)',
        textTransform: 'uppercase',
      },
    },

    // Section bands
    section: {
      light: {
        background: 'var(--color-canvas)',
        color: 'var(--color-ink)',
        padding: 'var(--spacing-section) var(--spacing-container)',
      },
      elevated: {
        background: 'var(--color-surface)',
        color: 'var(--color-ink)',
        padding: 'var(--spacing-section) var(--spacing-container)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      },
      dark: {
        background: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        padding: 'var(--spacing-section) var(--spacing-container)',
      },
      gradient: {
        background: 'var(--color-canvas)',
        color: 'var(--color-ink)',
        padding: 'var(--spacing-section-lg) var(--spacing-container)',
        // Gradient applied via ::before
      },
    },
  },

  // ──────────────────────────────────────────────
  // GRADIENT PRESETS
  // ──────────────────────────────────────────────
  gradients: {
    // Hero atmospheric mesh (Stripe/Vercel style)
    heroMesh: `
      background: 
        radial-gradient(ellipse 80% 50% at 20% 20%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse 60% 60% at 80% 30%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
        radial-gradient(ellipse 50% 50% at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse 100% 100% at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 70%);
    `,
    // Framer-style gradient spotlight cards
    spotlightViolet: `
      background: linear-gradient(135deg, #6a4cf5 0%, #8b5cf6 50%, #a855f7 100%);
    `,
    spotlightMagenta: `
      background: linear-gradient(135deg, #d44df0 0%, #ec4899 50%, #f43f5e 100%);
    `,
    spotlightOrange: `
      background: linear-gradient(135deg, #ff7a3d 0%, #f97316 50%, #ef4444 100%);
    `,
    spotlightCoral: `
      background: linear-gradient(135deg, #ff5577 0%, #ec4899 50%, #f43f5e 100%);
    `,
    // CTA gradient
    ctaPrimary: `
      background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
    `,
    // Text gradients
    textPrimary: `
      background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 50%, #ec4899 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    `,
    textSkyViolet: `
      background: linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    `,
    textVioletPink: `
      background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    `,
  },

  // ──────────────────────────────────────────────
  // PATTERNS & TEXTURES
  // ──────────────────────────────────────────────
  patterns: {
    // Grid pattern (Linear style)
    grid: `
      background-image: 
        linear-gradient(rgba(14, 165, 233, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(14, 165, 233, 0.04) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%);
    `,
    // Noise texture (Vercel style)
    noise: `
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      background-size: 256px 256px;
      opacity: 0.03;
    `,
    // Subtle diagonal lines
    diagonal: `
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(14, 165, 233, 0.01) 10px,
        rgba(14, 165, 233, 0.01) 20px
      );
    `,
  },

  // ──────────────────────────────────────────────
  // RESPONSIVE TYPE SCALE
  // ──────────────────────────────────────────────
  responsiveType: {
    'display-xxl': {
      base: '110px',
      mobile: '48px',
      tablet: '72px',
      desktop: '110px',
    },
    'display-xl': {
      base: '85px',
      mobile: '40px',
      tablet: '56px',
      desktop: '85px',
    },
    'display-lg': {
      base: '62px',
      mobile: '32px',
      tablet: '44px',
      desktop: '62px',
    },
    'display-md': {
      base: '40px',
      mobile: '28px',
      tablet: '32px',
      desktop: '40px',
    },
    headline: {
      base: '22px',
      mobile: '20px',
      tablet: '22px',
      desktop: '22px',
    },
    subhead: {
      base: '20px',
      mobile: '18px',
      tablet: '20px',
      desktop: '20px',
    },
    'body-lg': {
      base: '18px',
      mobile: '16px',
      tablet: '18px',
      desktop: '18px',
    },
  },
};

export type DesignSystem = typeof designSystem;
export default designSystem;