import { fileURLToPath } from 'url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // 全局引入 vitest，位置一
        environment: 'jsdom', // 设置测试环境为 JSDOM
        includeSource: ['src/**/*.{js,ts}'], // 设置需要包含的源代码文件或目录，这里指定了 src 目录下所有的 JavaScript 和 TypeScript 文件
        // root: fileURLToPath(new URL('./', import.meta.url)), // 设置测试的根目录为当前文件的路径
        coverage: {
            // enabled: true,
            // cleanOnRerun: true,
            provider: 'v8', // 默认使用 V8 引擎提供的原生代码覆盖率  c8支持构建在 v8 模块的基础上，并提供了更加友好和易用的命令行界面和功能。
            reporter: ['text', 'html', 'json'], // 设置生成代码覆盖率报告的方式为文本、HTML 和 JSON
            // reportsDirectory: './tests/unit/coverage', // 修改输出报告位置
            // exclude: ['src/**/icons'] // 设置不需要进行单元测试覆盖的地方
        },
        // browser: {
        //   enabled: true, // 启用在浏览器中运行测试
        //   name: 'chrome', // 设置浏览器类型为 Chrome
        // },
    }
});
