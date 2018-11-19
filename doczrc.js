import common from './config/webpack/common'

export default {
  title: 'Veek',
  description: 'Veek components',
  wrapper: 'src/components/helpers/WrapperTheme',
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
  },
  modifyBundlerConfig: config => {
    const newConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...common.resolve.alias,
        },
      },
    }

    return newConfig
  },
}
