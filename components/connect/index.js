import { GitHub, Mail, Twitter, Linkedin, Download } from '@components/icons'
import Link from '@components/link'

import styles from './connect.module.css'

const ConnectData = () => {
  return (
    <>
      <p className={styles.heading}>Get in touch.</p>

      <div className={styles.links}>
        <Link
          href="https://github.com/Boro23-wq"
          external
          className={styles.link}
        >
          <GitHub size={24} />
        </Link>

        <Link
          href="https://twitter.com/sdotboro"
          external
          className={styles.link}
        >
          <Twitter size={24} />
        </Link>

        <Link
          href="mailto:sboro2899@gmail.com?subject=Lets connect!"
          external
          className={styles.link}
        >
          <Mail size={24} />
        </Link>

        <Link
          href="https://linkedin.com/in/sintu-boro"
          external
          className={styles.link}
        >
          <Linkedin size={24} />
        </Link>

        <Link
          href="/assets/boro_resume.pdf"
          external
          download
          className={styles.link}
        >
          <Download size={24} />
        </Link>
      </div>
    </>
  )
}

export default ConnectData
