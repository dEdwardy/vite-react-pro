import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import VitePluginBabelImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePluginBabelImport({
    //   libraryName: 'antd',
    //   libraryDirectory: 'es',
    //   style(name) {
    //     return `antd/lib/${name}/style/index.css`
    //   }
    // })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  }
})
