module.exports = {
  '*.{ts,tsx}': 'yarn lint:es',
  '**/packages/core/**/*.{ts,tsx}': () => 'tsc --noEmit -p ./packages/core/tsconfig.json',
  '**/packages/application/**/*.{ts,tsx}': () =>
    'tsc --noEmit -p ./packages/application/tsconfig.json',
  '**/packages/service/**/*.{ts,tsx}': () => 'tsc --noEmit -p ./packages/service/tsconfig.json',
  '**/packages/presentation/**/*.{ts,tsx}': () =>
    'tsc --noEmit -p ./packages/presentation/tsconfig.json',
  '**/packages/web/**/*.{ts,tsx}': () => 'tsc --noEmit -p ./packages/web/tsconfig.json',
};
