import Project from '@components/project'
import getProjects from '@lib/get-projects'
import renderMarkdown from '@lib/render-markdown'

const ProjectPage = props => {
  return <Project {...props} />
}

export const getStaticProps = ({ params: { slug } }) => {
  const projects = getProjects()
  const projectIndex = projects.findIndex(p => p.slug === slug)
  const project = projects[projectIndex]
  const { body, ...rest } = project

  return {
    props: {
      previous: projects[projectIndex + 1] || null,
      next: projects[projectIndex - 1] || null,
      ...rest,
      html: renderMarkdown(body)
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: getProjects().map(p => `/project/${p.slug}`),
    fallback: false
  }
}

export default ProjectPage
