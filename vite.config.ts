import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(),
  // 自动引入
  AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    // 指定引入根目录下的 requests，config，utils 目录内的所有函数
    dirs: ['./src/requests/**', './src/config/**', './src/utils/**'],
    resolvers: [ElementPlusResolver()],
    // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
    dts: 'src/auto-import.d.ts',
    // 配置开启 eslint
    eslintrc: {
      enabled: false,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true,
    },
  }),
  // elementUi组件自动引入
  Components({
    resolvers: [ElementPlusResolver()],
    dts: 'src/components.d.ts',
  }),
  ],
  server: {
    port: 8080, //启动端口
    open: false, //浏览器自动打开页面
    https: false,
    hmr: true,
    // 设置 http 代理 跨域
    // proxy: {
    //   // '/cloud/api': {
    //   '/api': {
    //     // target: 'http://10.8.9.98:3000', //需要访问的地址
    //     target: 'https://netease-cloud-music-4xmo6vdfe-jy-he.vercel.app',
    //     // target: 'http://192.168.1.101:3000',
    //     changeOrigin: true,   //是否跨域
    //     secure: false,        //是否https接口
    //     rewrite: path => path.replace(/^\/api/, ''),   // 路径重写
    //   },
    // }
  },
  build: {
    target: 'es2015',
    outDir: 'dist', //指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    assetsInlineLimit: 2048,
    cssCodeSplit: true,
    // Terser 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大。
    // minify: isDev ? 'esbuild' : 'terser',
    minify: 'esbuild',
    terserOptions: {
      compress: {
        // 生产环境去除console
        // drop_console: !isDev,
      },
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/scss/main.scss';
          @import '@/assets/scss/theme.scss';
          @import 'jy-web-style/src/index.scss';
          @import '@/assets/scss/style.scss';
         `,
      },
    },
  },
});
