/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: false,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
}
