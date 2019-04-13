const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Vary/' : '/',
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html' // 输出文件
    }
    // index: {
    //   entry: 'examples/entry.js',
    //   template: 'examples/index.tpl',
    //   filename: 'index.html' // 输出文件
    // }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8086,
    publicPath: '/'
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
      .set('main', path.resolve('src'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('ts')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      });

      config.module.rule('md')
      .test(/\.md$/)
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .include.add(path.resolve(__dirname)).end()
      .use('vue-loader')
        .loader('vue-loader')
        .options({
          compilerOptions:{
            preserveWhitespace: false
          }
        })
        .end()
        .use('custom').loader(path.resolve(__dirname, './build/md-loader/index.js'));
  }
}