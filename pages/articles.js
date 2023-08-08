import Page from '@components/page'
import ArticleEntry from '@components/entry/article'

// Data
import articleMetaAndSchema from '@data/article.json'

const Reading = () => {
  const items = articleMetaAndSchema.data

  return (
    <Page
      title="Articles"
      description="Collection of articles, blog posts, and videos that I read."
    >
      <article>
        {items.map(entry => {
          return (
            <ArticleEntry
              key={entry.title}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              type={entry.key}
              comment={entry.comment}
              description={entry.description}
            />
          )
        })}
      </article>
    </Page>
  )
}

export default Reading
