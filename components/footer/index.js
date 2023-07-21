import { memo } from 'react'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.footer}>
        <div>
          <div className={styles.content}>© Sintu Boro</div>
          <div className={styles.content}>2023</div>
        </div>
      </div>
    </nav>
  )
}

Footer.displayName = 'Footer'
export default memo(Footer)
