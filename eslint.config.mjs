// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      stylistic: true,
      formatters: {
        css: true,
        markdown: true,
      },
    },
    {
      files: ['**/*.vue'],
      rules: {
        'no-console': 'off',
        'vue/singleline-html-element-content-newline': 'off',
      },
    },
  ),
)
