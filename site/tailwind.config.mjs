/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#021e64',   /* Logo-Navy — exakt aus dem Badge */
          hover: '#0A2E8C',
          soft: '#E2E8F8',
          dark: '#010E38',
        },
        care: {
          DEFAULT: '#2A4CAA',   /* Streifen-Blau (gedämpft) — zweite Markenfarbe */
          hover: '#1E3D96',
          soft: '#E6EDF9',
        },
        accent: {
          DEFAULT: '#D4A800',   /* Streifen-Gelb (gedämpft) — Wärme & Akzent */
          hover: '#B38E00',
          soft: '#FAF0C0',
        },
        ink: {
          DEFAULT: '#1E293B',
          muted: '#64748B',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        },
        line: '#E2E8F0',
        whatsapp: '#25D366',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#DC2626',
      },
      fontFamily: {
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h1-mobile': ['2rem', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'lead': ['1.1875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        'small': ['0.9375rem', { lineHeight: '1.5', fontWeight: '400' }],
        'xs-label': ['0.8125rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        'btn': '0.5rem',
        'card': '1rem',
        'modal': '1.25rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(15, 23, 42, 0.06)',
        'md': '0 4px 12px rgba(15, 23, 42, 0.08)',
        'lg': '0 12px 32px rgba(15, 23, 42, 0.12)',
        'xl': '0 24px 64px rgba(15, 23, 42, 0.16)',
      },
      maxWidth: {
        'content': '1200px',
        'prose-comfort': '38rem',
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '4rem',
      },
    },
  },
  plugins: [],
};
