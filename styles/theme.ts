import '@emotion/react';

const color = {
  MAIN: '#7EAF72',
  BLACK: '#333333',
  WHITE: '#FFFFFF',
  SYSTEM: '#E53A3A',
  Buttonpushed: '#04B600',
  Shadow: {
    card: '#0000000D',
    status: '#0000001F',
  },
  Gray: {
    gray900: '#4F4F51',
    gray800: '#666669',
    gray700: '#828387',
    gray600: '#8F9094',
    gray500: '#A5A6A9',
    gray400: '#B4B5B7',
    gray300: '#DBDCDE',
    gray200: '#EFF0F2',
    gray100: '#F5F5F8',
  },
} as const;

const typography = {
  h1: {
    semibold: {
      fontSize: '36px',
      lineHeight: '120%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '36px',
      lineHeight: '120%',
      fontWeight: '400',
    },
  },
  h2: {
    semibold: {
      fontSize: '32px',
      lineHeight: '120%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '32px',
      lineHeight: '120%',
      fontWeight: '400',
    },
  },
  h3: {
    semibold: {
      fontSize: '28px',
      lineHeight: '130%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '28px',
      lineHeight: '130%',
      fontWeight: '400',
    },
  },
  h4: {
    semibold: {
      fontSize: '24px',
      lineHeight: '130%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '24px',
      lineHeight: '130%',
      fontWeight: '400',
    },
  },
  m1: {
    semibold: {
      fontSize: '20px',
      lineHeight: '150%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '20px',
      lineHeight: '150%',
      fontWeight: '400',
    },
  },
  m2: {
    semibold: {
      fontSize: '18px',
      lineHeight: '150%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '18px',
      lineHeight: '150%',
      fontWeight: '400',
    },
  },
  m3: {
    semibold: {
      fontSize: '16px',
      lineHeight: '150%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '16px',
      lineHeight: '150%',
      fontWeight: '400',
    },
  },
  label: {
    semibold: {
      fontSize: '14px',
      lineHeight: '150%',
      fontWeight: '600',
    },
    regular: {
      fontSize: '14px',
      lineHeight: '150%',
      fontWeight: '400',
    },
  },
} as const;

export const theme = {
  color,
  typography,
};

type ExtendedTheme = typeof theme;

declare module '@emotion/react' {
  interface Theme extends ExtendedTheme {}
}
