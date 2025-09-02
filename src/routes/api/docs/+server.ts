import type { RequestHandler } from '@sveltejs/kit'

export type Tree = {
	name: string
	type: 'dir'|'file'
	children?: Tree[]
}

export const GET: RequestHandler = async ({ fetch }) => {
	const res = await fetch('/docs/tree.json')
	const tree = await res.json()

	return new Response(JSON.stringify(tree), {
		headers: { 'Content-Type': 'application/json' }
	})
}
