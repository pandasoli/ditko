import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { marked } from 'marked'

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug
	const docsDir = path.resolve(process.cwd(), 'src/docs')
	let docPath = path.join(docsDir, slug)

	if (fs.existsSync(docPath)) {
		if (fs.statSync(docPath).isDirectory())
			docPath = path.join(docPath, 'index.md')
	}
	else
		docPath += '.md'

	if (!fs.existsSync(docPath))
		throw error(404, 'Not found')

	const raw = fs.readFileSync(docPath, 'utf-8')
	const { content, data } = matter(raw)
	const html = marked(content)

	return {
		html,
		frontmatter: data
	}
}
