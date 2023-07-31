import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default () => {
  const projects = fs
    .readdirSync('./projects/')
    .filter(file => path.extname(file) === '.md')
    .map(file => {
      const projectContent = fs.readFileSync(`./projects/${file}`, 'utf8')
      const { data, content } = matter(projectContent)

      if (data.published === false) {
        return null
      }

      return { ...data, body: content }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  // Metadata for searching projects
  const meta = projects.map(p => ({ ...p, body: null }))
  fs.writeFileSync(
    path.resolve(process.cwd(), 'data/project.json'),
    JSON.stringify(meta)
  )

  return projects
}
