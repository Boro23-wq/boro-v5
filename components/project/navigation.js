import Link from '@components/link'
import ArrowLeft from '@components/icons/arrow-left'
import ArrowRight from '@components/icons/arrow-right'

import styles from './navigation.module.css'

const Previous = ({ previous, next }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link
            className={styles.link}
            href="/project/[slug]"
            gray
            as={`/project/${previous.slug}`}
          >
            <div className={styles.old}>
              <div className={styles.arrowL}>
                <ArrowLeft />
              </div>
              <p className={styles.text}>Older</p>
            </div>
            <div className={styles.title}>{previous.title}</div>
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link
            className={styles.link}
            href="/project/[slug]"
            gray
            as={`/project/${next.slug}`}
          >
            <div className={styles.new}>
              <p className={styles.text}>Newer</p>{' '}
              <div className={styles.arrowR}>
                <ArrowRight />
              </div>
            </div>
            <div className={styles.title}>{next.title}</div>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Previous
