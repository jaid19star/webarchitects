export const patternStyles = {
  // Hero mesh gradient (Stripe/Vercel style)
  heroMesh: {
    background: `
      radial-gradient(ellipse 80% 50% at 20% 20%, rgba(0, 229, 255, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse 60% 60% at 80% 30%, rgba(255, 215, 0, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse 50% 50% at 50% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 70%)
    `,
  },

  // Grid pattern (Linear style)
  grid: {
    backgroundImage: `
      linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
  },

  // Noise texture (Vercel style)
  noise: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
    backgroundSize: '256px 256px',
    opacity: 0.03,
  },

  // Diagonal lines
  diagonal: {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0, 229, 255, 0.01) 10px,
      rgba(0, 229, 255, 0.01) 20px
    )`,
  },
}