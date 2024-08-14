import esbuild from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';
import { $, chalk } from 'zx';

async function build() {
  try {
    await $`rm -rf dist`;

    // Build CJS
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      platform: 'node',
      format: 'cjs',
      sourcemap: true,
      outdir: 'dist',
      minify: true,
      plugins: [dtsPlugin()],
    });
    console.log(chalk.green('CJS compilation successful'));

    // Build ESM
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      platform: 'node',
      format: 'esm',
      sourcemap: true,
      outdir: 'dist',
      outExtension: { '.js': '.mjs' },
      minify: true,
      plugins: [dtsPlugin()],
    });
    console.log(chalk.green('ESM compilation successful'));

    console.log(chalk.green('Overall compilation successful'));
  } catch (error) {
    console.error(chalk.red('Build failed'), error);
    process.exit(1);
  }
}

build();
