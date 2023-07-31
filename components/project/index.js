import Head from 'next/head'

import Navigation from './navigation'
import Page from '@components/page'

// styles
import styles from './project.module.css'

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const Project = ({
  title,
  slug,
  html,
  hidden,
  og,
  description,
  date,
  previous,
  next
}) => {
  return (
    <Page
      slug={slug}
      title={title}
      description={description}
      showHeaderTitle={false}
      image={
        og && og === true
          ? `https://res.cloudinary.com/dsdlhtnpw/image/upload/${slug}.png`
          : og
      }
    >
      <Head>
        {hidden && <meta name="robots" content="noindex" />}
        {date && <meta name="date" content={date} />}
      </Head>

      <article
        dangerouslySetInnerHTML={{
          __html: `<h2 class="${styles.title}">${escapeHtml(title)}</h2> 
          <div class="${styles.yearAndHr}"> 
          <span class="${styles.date}">${date}</span>
          <hr class="${styles.yearHr}" />
          </div> 
          ${html}`
        }}
      />

      <Navigation previous={previous} next={next} />
    </Page>
  )
}

export default Project
