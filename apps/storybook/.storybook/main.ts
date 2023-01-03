const { mergeConfig } = require('vite');
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
module.exports = {
  stories: [
    //'../../../packages/**/src/**/**/*.stories.mdx',
    '../../../packages/**/src/components/**/*stories.tsx',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      skipChildrenPropWithoutDoc: false,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      include: ['../../packages/**/**/*.{ts,tsx}'],
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    });
  },
};
