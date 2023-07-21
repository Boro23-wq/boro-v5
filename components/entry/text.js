import { memo } from 'react'
import cn from 'classnames'

import Link from '@components/link'
import styles from './text.module.css'

const TextEntry = ({ title, description, type, comment, href, as }) => {
  return (
    <li className={styles.item}>
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title} (${description})`}
        className={styles.link}
      >
        <div className={styles.text}>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          {description && (
            <p className={cn(styles.description, 'clamp')}>{description}</p>
          )}
        </div>
        <div className={styles.type}>{type}</div>
      </Link>
    </li>
  )
}

export default memo(TextEntry)
