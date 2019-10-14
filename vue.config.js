const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
    assetsDir: './',
    devServer: {
        host: process.env.VUE_HOST || '0.0.0.0',
        port: process.env.VUE_PORT || 8080
        // proxy: {
        //   '/api': {
        //     target: 'http://api.shanliang.dev.719471.net',
        //     ws: true,
        //     changeOrigin: true,
        //     pathRewrite: {
        //       '^/api': ''
        //     }
        //   }
        // }
    },
    css: {
        sourceMap: false,
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                    // require('postcss-px2rem')({
                    //   remUnit: 75
                    // })
                ]
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, '~@/src/assets/main.less')
            ]
        }
    },
}
