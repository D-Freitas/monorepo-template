import eslintPluginJest from 'eslint-plugin-jest'

import { rulesDefault, ignores } from '@monorepo-template/config/eslint'

export default {
  ignores,
  plugins: {
    jest: eslintPluginJest,
  },
  rules: {
    ...rulesDefault,
  }
}
