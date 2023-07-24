import React from 'react'

import styles from './connect.module.css'

const ConnectData = () => {
  return (
    <>
      <p className={styles.heading}>Get in touch.</p>

      <blockquote>
        <a
          href="mailto:sboro2899@gmail.com?subject=Lets connect!"
          className="reset"
        >
          boro.mail
        </a>
      </blockquote>
    </>
  )
}

export default ConnectData
