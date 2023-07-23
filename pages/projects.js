import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Projects" description="Collection of past and present work.">
      <Entry
        title="Carely"
        description="Care-coordination and case management made easy."
        image="carely.png"
        href="https://github.com/Boro23-wq/cs-673-frontend"
        position="top"
      />

      <Entry
        title="Pokedex"
        description="Demonstrating CSR, SSR, SSG, and ISR."
        image="pokedex.png"
        href="https://github.com/Boro23-wq/Pokedex-w-Next"
      />

      <Entry
        title="Share Snippets"
        description="Snippets sharing platform."
        image="ss.png"
        href="https://github.com/Boro23-wq/Shareable-Snippets"
      />

      <Entry
        title="Chat"
        description="Homepage design concept built for a chat application."
        image="chat.png"
        href="https://chat-app-homepage.webflow.io/"
      />

      <Entry
        title="Team"
        description="Website design concept for remote team collaboration."
        image="team.png"
        href="https://team-app-5efacf.webflow.io/"
      />

      <Entry
        title="Stopify - Ecommerce"
        description="Powerful Ecommerce Mobile UI Kit."
        image="stopify.png"
        href="https://boro-ui-ux.webflow.io/project/stopify-ecommerce"
        position="bottom"
      />
    </Page>
  )
}

export default Projects
