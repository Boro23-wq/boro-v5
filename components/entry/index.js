import cn from 'classnames'
import 'intersection-observer'

import styles from './entry.module.css'
import Link from '@components/link'

const Entry = ({ title, description, image, href, position, tags }) => {
  return (
    <Link href={href} external>
      <section className={styles.section}>
        <img className={styles.image} src={`/projects/${image}`} />
        <div className={styles.overlay} />
        <div className={styles.text}>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          <p className={cn(styles.description, 'clamp')}>{description}</p>

          <div className={styles.tags}>
            {tags &&
              tags.map((tag, index) => (
                <div key={index}>
                  <p className={cn(styles.tag, 'clamp')}>∙ {tag}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Entry
