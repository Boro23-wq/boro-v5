import Link from '@components/link'

import styles from './navigation.module.css'

const Previous = ({ previous, next }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href="/blog/[slug]" gray as={`/blog/${previous.slug}`}>
            <div className={styles.title}>← Older</div>
            <div className={styles.title}>{previous.title}</div>
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href="/blog/[slug]" gray as={`/blog/${next.slug}`}>
            <div className={styles.title}>Newer →</div>
            <div className={styles.title}>{next.title}</div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Previous
