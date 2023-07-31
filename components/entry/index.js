import cn from 'classnames'
import 'intersection-observer'

import styles from './entry.module.css'
import Link from '@components/link'

const Entry = ({ title, description, image, href, position }) => {
  return (
    <Link href={href} external>
      <section className={styles.section}>
        <img className={styles.image} src={`/projects/${image}`} />
        <div className={styles.overlay} />
        <div className={styles.text}>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          <p className={cn(styles.description, 'clamp')}>{description}</p>

          <div className={styles.tags}>
            <p className={styles.tag}>∙ API</p>
            <p className={styles.tag}>∙ Design</p>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Entry
