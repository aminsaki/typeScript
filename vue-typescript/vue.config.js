const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    pages: {
        index: {
            entry: './src/users/main.ts',
            template: './public/index.html',
            filename: 'index.html',
            title: 'گروه فناوری اطلاعات هلو',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        panels: {
            entry: './src/panels/main.ts',
            template: './public/index.html',
            filename: 'index.html',
            title: 'گروه فناوری اطلاعات هلو',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },


    chainWebpack: (config) => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                return {
                    ...options,
                    reactivityTransform: true,
                    compilerOptions: {
                        isCustomElement: tag => tag.startsWith('ion-')
                    }
                }
            });

    },
})
