import { memo } from 'react'
import cn from 'classnames'

import Link from '@components/link'
import ArrowUpRight from '@components/icons/arrow-up-right'

import styles from './article.module.css'

const ArticleEntry = ({ title, image, href, comment, description, type }) => {
  return (
      <Link href={href} external title={`${title}`} className={styles.link}>
        <div className={styles.container}>
          <div className={styles.text}>
            <p className={cn(styles.title, 'clamp')}>{title}</p>
            <p className={cn(styles.description, 'clamp')}>{description}</p>
          </div>
          {/* <p className={styles.type}>{type}</p> */}
          <div className={styles.arrow}>
            <ArrowUpRight />
          </div>
        </div>
      </Link>
  )
}

export default memo(ArticleEntry)
