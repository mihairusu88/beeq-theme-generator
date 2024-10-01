import { defineStore } from 'pinia';

const colors = {
  brand: '#4f46e5',
  brandLight: '#e9f0ff',
  brandDark: '#181545',
  accent: '#6538be',
  accentLight: '#efebf8',
  accentDark: '#140b26',
  success: '#00b49d',
  successLight: '#e5f7f5',
  successDark: '#00241f',
  danger: '#e1172f',
  dangerLight: '#fce7ea',
  dangerDark: '#2d0509',
  warning: '#d99048',
  warningLight: '#fbf4ec',
  warningDark: '#2b1d0e',
  info: '#4f46e5',
  infoLight: '#e9f0ff',
  infoDark: '#181545',
  data01: '#4f46e5',
  data02: '#6538be',
  data03: '#de1395',
  data04: '#1eb3db',
  data05: '#00b49d',
  data06: '#dc6726',
  data07: '#f2d412',
  data08: '#e1172f',
  data09: '#156eeb',
  data10: '#646a77',
  data11: '#060708',
  data12: '#f1f2f4',
  neutral50: '#f6f6f8',
  neutral100: '#f1f2f4',
  neutral200: '#e7e8eb',
  neutral300: '#caccd2',
  neutral400: '#a6aab8',
  neutral500: '#898e99',
  neutral600: '#646a77',
  neutral700: '#3f4350',
  neutral800: '#2a2c35',
  neutral900: '#2a2c35',
  neutral950: '#15161a',
  neutral1000: '#0d0e11',
};

const common = {
  spacingXs3: '0.125rem',
  spacingXs2: '0.25rem',
  spacingXs: '0.5rem',
  spacingS: '0.75rem',
  spacingM: '1rem',
  spacingL: '1.5rem',
  spacingXl: '2rem',
  spacingXxl: '2.5rem',
  spacingXxl2: '3.5rem',
  spacingXxl3: '4rem',
  spacingXxl4: '4.5rem',
  boxShadowXs: '0 2px 0 rgba(0,0,0,.016)',
  boxShadowS: '0 8px 24px rgba(0,0,0,.04)',
  boxShadowM: '0 10px 48px -16px rgba(0,0,0,.12)',
  boxShadowL: '0 20px 58px -16px rgba(0,0,0,.16)',
  fontSizeXs: '0.75rem',
  fontSizeS: '0.875rem',
  fontSizeM: '1rem',
  fontSizeL: '1.125rem',
  fontSizeXl: '1.5rem',
  fontSizeXxl: '2rem',
  fontSizeXxl2: '2.5rem',
  fontSizeXxl3: '3rem',
  fontSizeXxl4: '3.5rem',
  fontSizeXxl5: '4rem',
  fontWeightThin: '100',
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',
  fontLineHeightSmall: '1.2',
  fontLineHeightRegular: '1.5',
  fontLineHeightLarge: '1.5',
};

const typography = {
  fontFamily: "'Outfit', sans-serif",
};

const radius = {
  radiusNone: '0',
  radiusXs2: '0.125rem',
  radiusXs: '0.25rem',
  radiusS: '0.5rem',
  radiusM: '0.75rem',
  radiusL: '1.5rem',
  radiusFull: '9999px',
};

const stroke = {
  strokeS: '1px',
  strokeM: '2px',
  strokeL: '3px',
};

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: localStorage.getItem('theme') ?? 'light',
    colors: {
      ...colors,
    },
    common: {
      ...common,
    },
    typography: {
      ...typography,
    },
    radius: {
      ...radius,
    },
    stroke: {
      ...stroke,
    },
  }),

  actions: {
    setTheme(theme: string) {
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
    },

    getThemeStyle(forExport?: boolean) {
      const convertCamelCaseIntoDashCase = (str: string) => {
        return `--bq-${str
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/([a-z])(\d)/g, '$1-$2')
          .toLowerCase()}`;
      };

      const style = Object.entries({
        ...this.colors,
        ...this.common,
        ...this.typography,
        ...this.radius,
        ...this.stroke,
      }).map(([key, value]) => {
        if (key.startsWith('spacing')) {
          const spacingKey = key.replace('spacing', '').toLowerCase();
          return `--bq-spacing-${spacingKey}: ${value};`;
        } else if (key.startsWith('boxShadow')) {
          const boxShadowKey = key.replace('boxShadow', '').toLowerCase();
          return `--bq-box-shadow--${boxShadowKey}: ${value};`;
        } else if (key.startsWith('fontSize')) {
          const fontSizeKey = key.replace('fontSize', '').toLowerCase();
          return `--bq-font-size--${fontSizeKey}: ${value};`;
        } else if (key.startsWith('fontWeight')) {
          const fontWeightKey = key.replace('fontWeight', '').toLowerCase();
          return `--bq-font-weight--${fontWeightKey}: ${value};`;
        } else if (key.startsWith('fontLineHeight')) {
          const fontLineHeightKey = key.replace('fontLineHeight', '').toLowerCase();
          return `--bq-font-line-height--${fontLineHeightKey}: ${value};`;
        } else if (key.startsWith('radius')) {
          const radiusKey = key.replace('radius', '').toLowerCase();
          return `--bq-radius--${radiusKey}: ${value};`;
        } else {
          return `${convertCamelCaseIntoDashCase(key)}: ${value};`;
        }
      });

      if (!forExport) {
        return style.join('\n');
      }

      return `:root {\n${style.join('\n')}\n}`;
    },

    resetToDefault() {
      this.colors = { ...colors };
      this.common = { ...common };
      this.typography = { ...typography };
      this.radius = { ...radius };
      this.stroke = { ...stroke };
    },
  },
});
