import { memo } from 'react'
import Link from 'next/link'

import { Logo as LogoIcon } from '@components/icons'
import Command from '@components/command'

import styles from './header.module.css'

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <div className={styles.container}>
          <Link href="/" aria-label="Home" className={styles.logo}>

            <LogoIcon />

          </Link>
          <Command />
          {title && <div className={styles.content}>{title}</div>}
        </div>
      </div>
    </nav>
  );
}

Header.displayName = 'Header'
export default memo(Header)
