import type { BuildConfig } from 'bun'

const config: BuildConfig = {
	entrypoints: ['./src/index.tsx'],
	outdir: './dist',
	format: 'esm',
}

await Bun.build(config)
