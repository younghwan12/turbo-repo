/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@pims-frontend/config-eslint/react-internal')],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
}
