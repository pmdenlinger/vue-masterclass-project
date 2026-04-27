import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],

  {
    name: 'app/strict-learning-rules',
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },

  {
    ...pluginVitest.configs.env,
    files: ['src/**/__tests__/*', 'tests/**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*', 'tests/**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  skipFormatting,
])
