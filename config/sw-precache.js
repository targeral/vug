/**
 * @file sw-precache一些设置项，staticFileGlobs主要是设置具体需要缓存的文件
 * 在webpack.prod.conf.js 中被使用
 * 参考链接
 * https://github.com/goldhand/sw-precache-webpack-plugin
 * https://github.com/GoogleChromeLabs/sw-precache
 */

var reposConfig = require('./repos.config');
const host = `^https:\\/\\/api\\.github\\.com\\/repos\\/${reposConfig.owner}\\/${reposConfig.repo}\\/content\\/`;
console.log(host);

module.exports = {
    /**
     * build时的配置文件
     * @type {Object}
     */
    build: {
        cacheId: 'sw-cache-app',
        filename: 'service-worker.js',
        /**
         * 需缓存的文件配置
         * 需动态缓存的放到runtimeCaching中处理
         *
         * @type {Array}
         */
        staticFileGlob: ['dist/**/*.{js,html,css}'],
        minify: false,
        /**
         * 需要省略掉的前缀名
         *
         * @type {string}
         */
        stripPrefix: 'dist/',
        /**
         * [mergeStaticsConfig description]
         *
         * @type {boolean}
         */
        mergeStaticsConfig: true,
        /**
         * 过滤不需要缓存的内容
         * 
         * map文件不需要缓存
         */
        staticFileGlobsIgnorePatterns: [
            /\.map$/ 
        ],
        /**
         * 当请求路径不在缓存里的返回，对于单页应用来说，入口点是一样的
         *
         * @type {string}
         */
        navigateFallback: '/index.html',
        /**
         * 使用navigateFallback的白名单
         * 默认为[],即任意路径的访问都会访问navigateFallback设置的内容。
         * 如果为 /test/ ,则只有当访问路径为 https://example.com/test/ 才能访问。
         * 可参考：
         * https://github.com/GoogleChromeLabs/sw-precache#navigatefallbackwhitelist-arrayregexp
         * @type {Array}
         */
        navigateFallbackWhitelist: [],

        /**
         * 自定义service-worker.js文件的模板，不配置时采用默认的配置
         * 可参考：
         * https://github.com/GoogleChromeLabs/sw-precache/blob/master/service-worker.tmpl
         * @type {String}
         */
        templateFilePath: 'config/sw.tmpl.js',

        /**
         * 是否 verbose
         * 
         * 参考：
         * https://github.com/GoogleChromeLabs/sw-precache#verbose-boolean
         * @type {boolean}
         */
        verbose: true,
        /**
         * 需要根据路由动态处理的文件
         *
         * @type {Array}
         */
        runtimeCaching: [
            {
                urlPattern: new RegExp(`${host}all`),
                handler: 'networkFirst',
                options: {
                    cache: {
                        name: 'blog-list'
                    }
                }
            },
            {
                urlPattern: new RegExp(`${host}classify\\/\w*`),
                handler: 'networkFirst',
                options: {
                    cache: {
                        name: 'classify-blog-list'
                    }
                }
            },
            {
                urlPattern: new RegExp(`${host}all\\/\w*\\.md$`),
                handler: 'networkFirst',
                options: {
                    cache: {
                        name: 'some-blogs'
                    }
                }
            }
        ]
    }
}