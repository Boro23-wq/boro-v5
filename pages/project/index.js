import Page from '@components/page'
import Entry from '@components/entry'

// Data
import getProjects from '@lib/get-projects'

const Project = ({ projects }) => {
  return (
    <Page title="Project" description="Collection of past and present work.">
      <article>
        {projects &&
          projects.map(project => (
            <Entry
              key={`project-${project.slug}`}
              href="/project/[slug]"
              as={`/project/${project.slug}`}
              title={project.title}
              slug={project.slug}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const projects = getProjects()

  return {
    props: {
      projects
    }
  }
}

export default Project
