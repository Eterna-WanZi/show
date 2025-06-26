// vite.config.ts
import { defineConfig } from "file:///C:/Users/%E4%B8%B8%E5%AD%90/Desktop/vue%E9%A1%B9%E7%9B%AE/Vue3-Ts/projectwan/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/%E4%B8%B8%E5%AD%90/Desktop/vue%E9%A1%B9%E7%9B%AE/Vue3-Ts/projectwan/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import Unocss from "file:///C:/Users/%E4%B8%B8%E5%AD%90/Desktop/vue%E9%A1%B9%E7%9B%AE/Vue3-Ts/projectwan/node_modules/unocss/dist/vite.mjs";

// src/untils/myunocss.ts
var rules = [
  ["img-f", { "width": "100%", "object-fit": "contain" }],
  ["w-f", { width: "100%" }],
  [/^fl-(\d+)$/, ([, flex]) => ({ flex: `${flex}` })]
];
var shortcuts = [
  [
    /^f-((c|s|e)(-(c|s|e|b|a))*)$/,
    ([, , align, , justify]) => {
      const matches = [
        { prefix: "c", value: "center" },
        { prefix: "s", value: "start" },
        { prefix: "e", value: "end" },
        { prefix: "b", value: "between" },
        { prefix: "a", value: "around" }
      ];
      let style = "";
      let corr = matches.find((ele) => ele.prefix === align);
      style += `flex items-${corr == null ? void 0 : corr.value} content-${corr == null ? void 0 : corr.value}`;
      if (justify) {
        corr = matches.find((ele) => ele.prefix === justify);
        style += ` justify-${corr == null ? void 0 : corr.value}`;
      }
      return style;
    }
  ]
];

// vite.config.ts
import { presetAttributify, presetIcons, presetUno } from "file:///C:/Users/%E4%B8%B8%E5%AD%90/Desktop/vue%E9%A1%B9%E7%9B%AE/Vue3-Ts/projectwan/node_modules/unocss/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/%E4%B8%B8%E5%AD%90/Desktop/vue%E9%A1%B9%E7%9B%AE/Vue3-Ts/projectwan/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[name]"
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ],
      rules,
      shortcuts
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src")
      // 相对路径别名配置，使用 @ 代替 src
    }
  },
  //scss全局变量配置项
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3VudGlscy9teXVub2Nzcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1NEUzOFx1NUI1MFxcXFxEZXNrdG9wXFxcXHZ1ZVx1OTg3OVx1NzZFRVxcXFxWdWUzLVRzXFxcXHByb2plY3R3YW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1NEUzOFx1NUI1MFxcXFxEZXNrdG9wXFxcXHZ1ZVx1OTg3OVx1NzZFRVxcXFxWdWUzLVRzXFxcXHByb2plY3R3YW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLyVFNCVCOCVCOCVFNSVBRCU5MC9EZXNrdG9wL3Z1ZSVFOSVBMSVCOSVFNyU5QiVBRS9WdWUzLVRzL3Byb2plY3R3YW4vdml0ZS5jb25maWcudHNcIjsvLyB2aXRlLmNvbmZpZy50c1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uLCBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnXG5cbmltcG9ydCB7IHJ1bGVzLCBzaG9ydGN1dHMgfSBmcm9tICcuL3NyYy91bnRpbHMvbXl1bm9jc3MnOyBcbmltcG9ydCB7IHByZXNldEF0dHJpYnV0aWZ5LCBwcmVzZXRJY29ucywgcHJlc2V0VW5vIH0gZnJvbSAndW5vY3NzJ1xuLy9cdTVGMTVcdTUxNjVzdmdcdTk3MDBcdTg5ODFcdTc1MjhcdTUyMzBcdTc2ODRcdTYzRDJcdTRFRjZcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgICAgIHN5bWJvbElkOiAnaWNvbi1bbmFtZV0nLFxuICAgIH0pLFxuICAgIFVub2Nzcyh7XG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFVubygpLFxuICAgICAgICBwcmVzZXRBdHRyaWJ1dGlmeSgpLFxuICAgICAgICBwcmVzZXRJY29ucygpLFxuICAgICAgXSxcbiAgICAgIHJ1bGVzLFxuICAgICAgc2hvcnRjdXRzLFxuICAgIH0pIGFzIFBsdWdpbk9wdGlvbltdLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKCcuL3NyYycpLCAvLyBcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1MjggQCBcdTRFRTNcdTY2RkYgc3JjXG4gICAgfSxcbiAgfSxcbiAgLy9zY3NzXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU5MTREXHU3RjZFXHU5ODc5XG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZS5zY3NzXCI7JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTRFMzhcdTVCNTBcXFxcRGVza3RvcFxcXFx2dWVcdTk4NzlcdTc2RUVcXFxcVnVlMy1Uc1xcXFxwcm9qZWN0d2FuXFxcXHNyY1xcXFx1bnRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFx1NEUzOFx1NUI1MFxcXFxEZXNrdG9wXFxcXHZ1ZVx1OTg3OVx1NzZFRVxcXFxWdWUzLVRzXFxcXHByb2plY3R3YW5cXFxcc3JjXFxcXHVudGlsc1xcXFxteXVub2Nzcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvJUU0JUI4JUI4JUU1JUFEJTkwL0Rlc2t0b3AvdnVlJUU5JUExJUI5JUU3JTlCJUFFL1Z1ZTMtVHMvcHJvamVjdHdhbi9zcmMvdW50aWxzL215dW5vY3NzLnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgUnVsZSwgVXNlclNob3J0Y3V0cyB9IGZyb20gJ3Vub2NzcydcclxuXHJcbmV4cG9ydCBjb25zdCBydWxlczogUnVsZVtdID0gW1xyXG4gIFsnaW1nLWYnLCB7ICd3aWR0aCc6ICcxMDAlJywgJ29iamVjdC1maXQnOiAnY29udGFpbicgfV0sXHJcbiAgWyd3LWYnLCB7IHdpZHRoOiAnMTAwJScgfV0sXHJcbiAgWy9eZmwtKFxcZCspJC8sIChbLCBmbGV4XSkgPT4gKHsgZmxleDogYCR7ZmxleH1gIH0pXSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3J0Y3V0czogVXNlclNob3J0Y3V0cyA9IFtcclxuICBbXHJcbiAgICAvXmYtKChjfHN8ZSkoLShjfHN8ZXxifGEpKSopJC8sXHJcbiAgICAoWywgLCBhbGlnbiwgLCBqdXN0aWZ5XSkgPT4geyAvLyBTdHJpbmcucHJvdG90eXBlLm1hdGNoIFx1NzY4NFx1NTMzOVx1OTE0RFx1N0VEM1x1Njc5Q1x1NEYxQVx1NjcwOVx1NTFFMFx1NzlDRFx1NjBDNVx1NTFCNVxyXG4gICAgICBjb25zdCBtYXRjaGVzID0gW1xyXG4gICAgICAgIHsgcHJlZml4OiAnYycsIHZhbHVlOiAnY2VudGVyJyB9LFxyXG4gICAgICAgIHsgcHJlZml4OiAncycsIHZhbHVlOiAnc3RhcnQnIH0sXHJcbiAgICAgICAgeyBwcmVmaXg6ICdlJywgdmFsdWU6ICdlbmQnIH0sXHJcbiAgICAgICAgeyBwcmVmaXg6ICdiJywgdmFsdWU6ICdiZXR3ZWVuJyB9LFxyXG4gICAgICAgIHsgcHJlZml4OiAnYScsIHZhbHVlOiAnYXJvdW5kJyB9LFxyXG4gICAgICBdXHJcbiAgICAgIGxldCBzdHlsZSA9ICcnXHJcbiAgICAgIGxldCBjb3JyID0gbWF0Y2hlcy5maW5kKGVsZSA9PiBlbGUucHJlZml4ID09PSBhbGlnbilcclxuICAgICAgc3R5bGUgKz0gYGZsZXggaXRlbXMtJHtjb3JyPy52YWx1ZX0gY29udGVudC0ke2NvcnI/LnZhbHVlfWBcclxuICAgICAgaWYgKGp1c3RpZnkpIHtcclxuICAgICAgICBjb3JyID0gbWF0Y2hlcy5maW5kKGVsZSA9PiBlbGUucHJlZml4ID09PSBqdXN0aWZ5KVxyXG4gICAgICAgIHN0eWxlICs9IGAganVzdGlmeS0ke2NvcnI/LnZhbHVlfWBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3R5bGVcclxuICAgIH0sXHJcbiAgXSxcclxuXVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUVqQixPQUFPLFlBQVk7OztBQ0ZaLElBQU0sUUFBZ0I7QUFBQSxFQUMzQixDQUFDLFNBQVMsRUFBRSxTQUFTLFFBQVEsY0FBYyxVQUFVLENBQUM7QUFBQSxFQUN0RCxDQUFDLE9BQU8sRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUFBLEVBQ3pCLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDcEQ7QUFFTyxJQUFNLFlBQTJCO0FBQUEsRUFDdEM7QUFBQSxJQUNFO0FBQUEsSUFDQSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLE1BQU07QUFDMUIsWUFBTSxVQUFVO0FBQUEsUUFDZCxFQUFFLFFBQVEsS0FBSyxPQUFPLFNBQVM7QUFBQSxRQUMvQixFQUFFLFFBQVEsS0FBSyxPQUFPLFFBQVE7QUFBQSxRQUM5QixFQUFFLFFBQVEsS0FBSyxPQUFPLE1BQU07QUFBQSxRQUM1QixFQUFFLFFBQVEsS0FBSyxPQUFPLFVBQVU7QUFBQSxRQUNoQyxFQUFFLFFBQVEsS0FBSyxPQUFPLFNBQVM7QUFBQSxNQUNqQztBQUNBLFVBQUksUUFBUTtBQUNaLFVBQUksT0FBTyxRQUFRLEtBQUssU0FBTyxJQUFJLFdBQVcsS0FBSztBQUNuRCxlQUFTLGNBQWMsNkJBQU0sS0FBSyxZQUFZLDZCQUFNLEtBQUs7QUFDekQsVUFBSSxTQUFTO0FBQ1gsZUFBTyxRQUFRLEtBQUssU0FBTyxJQUFJLFdBQVcsT0FBTztBQUNqRCxpQkFBUyxZQUFZLDZCQUFNLEtBQUs7QUFBQSxNQUNsQztBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUNGOzs7QUR0QkEsU0FBUyxtQkFBbUIsYUFBYSxpQkFBaUI7QUFFMUQsU0FBUyw0QkFBNEI7QUFDckMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0oscUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxrQkFBa0IsQ0FBQztBQUFBLE1BQzFELFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBLFFBQ2xCLFlBQVk7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUE7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
