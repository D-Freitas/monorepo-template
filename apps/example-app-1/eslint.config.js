import eslintPluginVitest from 'eslint-plugin-vitest'

import { rulesDefault, ignores } from '@monorepo-template/config/eslint'

export default {
  ignores,
  plugins: {
    vitest: eslintPluginVitest,
  },
  rules: {
    ...rulesDefault,
  }
}
