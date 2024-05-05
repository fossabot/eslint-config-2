import { withConfigs } from './core';
import type { Config, ConfigWithExtends, Rules } from './types';

import { configs as stylisticConfigs } from '@stylistic/eslint-plugin';
import { vueConfigs } from './vue';

export const files = [
  '**/*.{js,mjs,cjs}',
  '**/*.ts',
  '**/*.vue',
];

export const rules: Rules = {
  '@stylistic/brace-style': ['error', '1tbs'],
  '@stylistic/indent': ['error', 2],
  '@stylistic/quotes': ['error', 'single'],
  'vue/multi-word-component-names': 'off',
};

export const configs: Config[] = [
  {
    name: 'poupe/vue-ts',
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['vue'],
        sourceType: 'module',
      },
    },
  },
  {
    name: 'poupe/files',
    files,
  },
  {
    name: 'poupe/rules',
    rules,
  },
];

export const defineConfig = (...userConfigs: ConfigWithExtends[]): Config[] => [
  ...unjsPreset({
    ignores: [
      '**/dist',
      '**/node_modules',
    ],
  }),
  ...withConfigs(
    ...vueConfigs['flat/recommended'],
    stylisticConfigs['recommended-flat'],
    ...configs,
    ...userConfigs,
  ),
];
