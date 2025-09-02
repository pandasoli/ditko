import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { marked } from 'marked'

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug
	let path_ = path.join('src/docs', slug)

	if (fs.existsSync(path_)) {
		if (fs.statSync(path_).isDirectory())
			path_ = path.join(path_, 'index.md')
	}
	else
		path_ += '.md'

	if (!fs.existsSync(path_))
		throw error(404, 'Not found')

	const raw = fs.readFileSync(path_, 'utf-8')
	const { content, data } = matter(raw)
	const html = marked(content)

	return {
		html,
		frontmatter: data
	}
}
