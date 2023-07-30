import { memo } from 'react'
import cn from 'classnames'

import Link from '@components/link'
import styles from './article.module.css'

const ArticleEntry = ({ title, image, href, comment, description, type }) => {
  return (
    <Link href={href} external title={`${title}`} className={styles.link}>
      <div>
        <p className={cn(styles.title, 'clamp')}>{title}</p>
        <p className={cn(styles.description, 'clamp')}>{description}</p>
        {/* <p className={styles.type}>{type}</p> */}
      </div>
    </Link>
  )
}

export default memo(ArticleEntry)
