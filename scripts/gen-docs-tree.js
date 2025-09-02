import fs from 'fs'
import path from 'path'

const walk = dir =>
	fs.readdirSync(dir).flatMap(name => {
		const fullPath = path.join(dir, name)
		const stat = fs.statSync(fullPath)

		if (name === 'tree.json') return []

		if (stat.isDirectory())
			return { name, type: 'dir', children: walk(fullPath) }
		else
			return { name: name.replace(/\.md$/, ''), type: 'file' }
	})

const docsDir = path.resolve('static/docs')
const tree = walk(docsDir)

fs.writeFileSync('static/docs/tree.json', JSON.stringify(tree))
