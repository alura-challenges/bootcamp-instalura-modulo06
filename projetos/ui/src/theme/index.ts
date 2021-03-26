const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#D7385E',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FB7B6B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070C0E',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  // Feedback colors
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export const typographyVariants = {
  // [title]
  title: {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: 1.25, // 125%
  },
  titleXS: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25, // 125%
  },
  // [subTitle]
  subTitle: {
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: 1.25, // 125%
  },
  // [paragraph1]
  paragraph1: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
  // [paragraph2]
  paragraph2: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
  // [smallestException]
  smallestException: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1, // 100%
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xl: 1200, // extra large
  },
  borderRadius: '8px',
  fontFamily: '\'Rubik\', sans-serif',
  transition: '200ms ease-in-out',
};