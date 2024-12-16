import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/lib/index.ts',
			name: 'Formy',
			fileName: (format) => `formy.${format}.js`,
		},
		rollupOptions: {
			// Ensure to externalize deps that shouldn't be bundled
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
})
