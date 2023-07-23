import { memo } from 'react'
import cn from 'classnames'

import Link from '@components/link'
import styles from './text.module.css'

const TextEntry = ({ title, date, year, href, as }) => {
  return (
    <li className={styles.item}>
      <Link
        href={href}
        as={as}
        external={!as}
        title={`${title}`}
        className={styles.link}
      >
        <p className={cn(styles.title, 'clamp')}>{title}</p>
        <p className={styles.date}>{date}</p>
      </Link>
    </li>
  )
}

export default memo(TextEntry)
