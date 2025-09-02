import fs from 'fs'
import path from 'path'
import type { RequestHandler } from '@sveltejs/kit'

export type Tree = {
	name: string
	type: 'dir'|'file'
	children?: Tree[]
}

const walk = (dir: string): Tree[] =>
	fs.readdirSync(dir).map(name => {
		const fullPath = path.join(dir, name)
		const stat = fs.statSync(fullPath)

		if (stat.isDirectory())
			return { name, type: 'dir', children: walk(fullPath) }
		else {
			name = name.split('.').slice(0, -1).join('.')
			return { name, type: 'file' }
		}
	})

export const GET: RequestHandler = async () => {
	const docsDir = path.resolve(process.cwd(), 'src/docs')
	const tree = walk(docsDir)

	return new Response(JSON.stringify(tree), {
		headers: { 'Content-Type': 'application/json' }
	})
}
