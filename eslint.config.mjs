import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const flatCompat = new FlatCompat();

const settings = [
  ...fixupConfigRules(flatCompat.extends('prettier')),
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      '.yarn/**/*',
      'build/**/*',
      'dist/**/*',
      '.husky/**/*',
    ],
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': 'allow-with-description',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      'max-depth': ['warn', 3],
      'max-lines': ['warn', 150],
      'no-case-declarations': 'error',
      'no-empty': 'off',
      'no-unneeded-ternary': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
];

// Important top level ignores to override other ignores by plugins
const settingsWithIgnores = [
  {
    ignores: [
      '.next/**/*',
      'node_modules/**/*',
      '.yarn/**/*',
      'build/**/*',
      'dist/**/*',
      '.husky/**/*',
    ],
  },
  ...settings,
];

export default settingsWithIgnores;
