import TextEntry from '@components/entry/text'
import styles from './posts-list.module.css'

const Posts = ({ posts, paginate }) => {
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()

    if (!acc[year]) {
      acc[year] = []
    }

    acc[year].push(post)
    return acc
  }, {})

  return (
    <div>
      {Object.entries(postsByYear)
        .reverse()
        .map(([year, posts]) => (
          <div key={`year-${year}`}>
            <div className={styles.yearAndHr}>
              <p className={styles.year}>{year}</p>
              <hr className={styles.yearHr} />
            </div>
            {posts.map(post => (
              <TextEntry
                key={`post-${post.slug}`}
                href="/blog/[slug]"
                as={`/blog/${post.slug}`}
                title={post.title}
                date={new Date(post.date).toLocaleDateString('default', {
                  month: 'numeric',
                  day: 'numeric'
                })}
                year={new Date(post.date).toLocaleDateString('default', {
                  year: 'numeric'
                })}
              />
            ))}
          </div>
        ))}
    </div>
  )
}

export default Posts
