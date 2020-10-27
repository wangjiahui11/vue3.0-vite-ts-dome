import path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

module.exports = {
  optimizeDeps: {
    include: ["moment", "echarts", "axios", "mockjs", 'vant']
  },
  open: true,
  // 是否开启 https
  alias: {
    '/@/': pathResolve('./src'),
    '/@views/': pathResolve('./src/views'),
    '/@typings/': pathResolve('./src/typings'),
    '/@components/': pathResolve('./src/components')
  },
    // proxy: {
    //   // 如果是 /lsbdb 打头，则访问地址如下 '/lsbdb': 'http://10.192.195.96:8087',
    //   '/lsbdb': {
    //     target: 'http://10.192.195.96:8087/',
    //     changeOrigin: true,
    //     // rewrite: path => path.replace(/^\/lsbdb/, '')
    //   }
    // }
};
