import { memo } from 'react'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.footer}>
        <div>
          <p className={styles.content}>Boro</p>
          <p className={styles.content}>2023</p>
        </div>
      </div>
    </nav>
  )
}

Footer.displayName = 'Footer'
export default memo(Footer)
