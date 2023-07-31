import cn from 'classnames'
import 'intersection-observer'
import Link from '@components/link'

import styles from './entry.module.css'

const Entry = ({ title, description, image, href, as, position, tags }) => {
  return (
    <Link href={href} as={as} external={!as} title={`${title}`}>
      <section className={styles.section}>
        <img className={styles.image} src={`/projects/cover/${image}`} />
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
