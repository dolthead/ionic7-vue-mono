import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { IonicResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        // {
        //   from: '@ionic/vue',
        //   imports: ['IonButton', 'IonIcon', 'IonInput', 'IonItem', 'IonTitle', 'IonToolbar', 'IonHeader'],
        // },
      ],
      resolvers: [IonicResolver()],
      dts: "./auto-imports.d.ts",
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
    Components({
      dts: true,
      extensions: ["vue"],
      resolvers: [ElementPlusResolver(), IonicResolver()],
      dirs: [
        "./src"
      ],
      deep: true,
      directoryAsNamespace: false,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
