import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
const root = resolve( __dirname, 'src');

export default defineConfig({
	test: {
		include: ['**/js/*.test.js'],
		globals: true,
		reporters: 'verbose',
	},
	root: 'src',
	build: {
		emptyOutDir: true,
		outDir: '../dist',
		rollupOptions: {
			output: {
			  assetFileNames: `assets/[name].[ext]`
			},

			input: {
				main: resolve(root, 'index.html'),
				webentwicklung: resolve(root, 'webentwicklung.html'),
				veranstaltungstechnik: resolve(root, 'veranstaltungstechnik.html'),
			}
		  }
	},
});
