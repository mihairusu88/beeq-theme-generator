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
  data1: '#4f46e5',
  data2: '#6538be',
  data3: '#de1395',
  data4: '#1eb3db',
  data5: '#00b49d',
  data6: '#dc6726',
  data7: '#f2d412',
  data8: '#e1172f',
  data9: '#156eeb',
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

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: localStorage.getItem('theme') ?? 'light',
    colors: {
      ...colors,
    },
  }),

  actions: {
    setTheme(theme: string) {
      this.currentTheme = theme;
      localStorage.setItem('theme', theme);
    },

    getThemeStyle(colors: Record<string, string>, forExport?: boolean) {
      if (!forExport) {
        const convertCamelCaseIntoDashCase = (str: string) => {
          return `--bq-${str
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/([a-z])(\d)/g, '$1-$2')
            .toLowerCase()}`;
        };

        const colorsStyle = Object.entries(colors).map(([key, value]) => {
          return `${convertCamelCaseIntoDashCase(key)}: ${value};`;
        });

        return colorsStyle.join('\n');
      }

      const convertCamelCaseIntoDashCase = (str: string) => {
        return `--bq-${str
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/([a-z])(\d)/g, '$1-$2')
          .toLowerCase()}`;
      };

      const colorsStyle = Object.entries(colors).map(([key, value]) => {
        return `    ${convertCamelCaseIntoDashCase(key)}: ${value};`;
      });

      return `:root {\n${colorsStyle.join('\n')}\n}`;
    },

    resetToDefault() {
      this.colors = { ...colors };
    },
  },
});
