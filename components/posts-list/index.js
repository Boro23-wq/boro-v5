import { Fragment, useState } from 'react'

import TextEntry from '@components/entry/text'
import styles from './posts-list.module.css'

const Posts = ({ posts, paginate }) => {
  const [showMore, setShowMore] = useState(1)

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {})

  return (
    <div className={styles.container}>
      {Object.entries(postsByYear)
        .reverse()
        .map(([year, yearPosts], index) => {
          const yearElement = (
            <p key={`year-${year}`} className={styles.year}>
              {year}
            </p>
          )

          const postsForCurrentYear = yearPosts
            .slice(0, paginate ? showMore : undefined)
            .map(post => {
              const date = new Date(post.date).toLocaleDateString('default', {
                month: 'numeric',
                day: 'numeric'
              })

              return (
                <TextEntry
                  href="/blog/[slug]"
                  as={`/blog/${post.slug}`}
                  title={post.title}
                  type={date}
                  description={post.description}
                />
              )
            })

          const postsAndHr = (
            <div className={styles.post} key={`posts-and-hr-${year}`}>
              <p>{postsForCurrentYear}</p>
              {index < Object.keys(postsByYear).length - 1 && (
                <div className={styles.hr} />
              )}
            </div>
          )

          // Wrap yearElement and postsAndHr inside a div
          const content = (
            <div className={styles.content} key={`year-content-${year}`}>
              {yearElement}
              {postsAndHr}
            </div>
          )

          return postsForCurrentYear.length ? content : null
        })}

      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 3)
          }}
          className={styles.button}
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default Posts
