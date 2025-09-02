import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import matter from 'gray-matter'
import { marked } from 'marked'

export const load: PageServerLoad = async ({ params, fetch }) => {
	const slug = params.slug
	let url = `/docs/${slug}`

	let res = await fetch(`${url}/index.md`)

	if (!res.ok)
		res = await fetch(`${url}.md`)

	if (!res.ok)
		throw error(404, 'Not found')

	const raw = await res.text()
	const { content, data } = matter(raw)
	const html = marked(content)

	return {
		html,
		frontmatter: data
	}
}
