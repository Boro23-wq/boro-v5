import React from 'react'

import { GitHub, Mail, Twitter, Linkedin } from '@components/icons'
import Link from '@components/link'

import styles from './connect.module.css'

const ConnectData = () => {
  return (
    <>
      <p className={styles.heading}>Get in touch.</p>

      <Link
        href="https://github.com/Boro23-wq"
        external
        className={styles.link}
      >
        <GitHub size={22} />
      </Link>

      <Link
        href="https://twitter.com/sdotboro"
        external
        className={styles.link}
      >
        <Twitter size={22} />
      </Link>

      <Link
        href="https://linkedin.com/in/sintu-boro"
        external
        className={styles.link}
      >
        <Linkedin size={22} />
      </Link>

      <Link
        href="mailto:sboro2899@gmail.com?subject=Lets connect!"
        external
        className={styles.link}
      >
        <Mail size={22} />
      </Link>
    </>
  )
}

export default ConnectData
