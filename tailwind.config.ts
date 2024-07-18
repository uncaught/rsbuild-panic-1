import {PluginCreator} from 'tailwindcss/types/config';

const baseFontSizePlugin: PluginCreator = ({addBase}) =>
  addBase({
    html: {fontSize: '14px'},
  });

export default {
  content: ['./src/**/*.tsx'],
  plugins: [baseFontSizePlugin],
  theme: {
    extend: {},
  },
};
