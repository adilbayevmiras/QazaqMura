export const typography = {
  fonts: {
    display: 'Unbounded, sans-serif',
    body: '"Golos Text", Inter, sans-serif',
    data: '"IBM Plex Mono", monospace',
  },
  scale: {
    displayXl: { fontSize: '56px', lineHeight: '64px', fontFamily: 'Unbounded, sans-serif' },
    displayL: { fontSize: '36px', lineHeight: '44px', fontFamily: 'Unbounded, sans-serif' },
    h2: { fontSize: '24px', lineHeight: '32px', fontWeight: 700 },
    h3: { fontSize: '18px', lineHeight: '26px', fontWeight: 600 },
    bodyL: { fontSize: '16px', lineHeight: '26px', fontWeight: 400 },
    bodyM: { fontSize: '14px', lineHeight: '22px', fontWeight: 400 },
    caption: { fontSize: '12px', lineHeight: '18px', fontWeight: 500 },
    data: { fontSize: '14px', lineHeight: '20px', fontFamily: '"IBM Plex Mono", monospace' },
  },
} as const;