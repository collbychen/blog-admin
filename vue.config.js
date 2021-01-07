module.exports = {

    publicPath: '/',    //部署应用包时的基本url。baseUrl:"/",//从 Vue CLI 3.3 起已弃用
    outputDir: 'dist',    //打包后生成的生产环境构建文件的目录，dist是默认值。默认情况下每次打包都会清空上次打包文件（构建时传入 --no-clean 可关闭该行为）。
    assetsDir: "static",     //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    lintOnSave: false,    // 开发环境启动eslint代码检查
    indexPath: "index.html",     //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    filenameHashing: true,     //生成的静态资源名, 默认加了hash, 命名.后面的为hash：chunk-2d0aecf8.71e621e9
    runtimeCompiler: false,    //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    transpileDependencies: [],    //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    productionSourceMap: false,    //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    devServer: {
        hot: true,    //热模块替换，就是热更新页面
        compress: true,    //为所服务的一切启用gzip压缩
        host: 'localhost',
        port: 3100,
        open: true,
        proxy: {
            '/api': {
                target: 'http://server:9090',  //目标接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {"^/api" : ""}
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    },

};
