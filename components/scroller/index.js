import React from 'react'
import Link from '@components/link'

import ArrowUpRight from '@components/icons/arrow-up-right'

import styles from './scroller.module.css'

const Scroller = () => {
  return (
    <div>
      <div className={styles.stack}>
        <div className={styles.column}>
          <h1 className={styles.section}>Blog</h1>
          <div>
            <Link
              className={styles.link}
              underline
              href="/blog/netflix-architecture"
            >
              Netflix streaming service
            </Link>
            <p className={styles.description}>
              System behind the tremendous scale.
            </p>
          </div>
          <div>
            <Link
              className={styles.link}
              underline
              href="/blog/module-federation"
            >
              Module federation
            </Link>
            <p className={styles.description}>
              Architecture using reusable components between multiple
              applications.
            </p>
          </div>
          <div>
            <Link className={styles.link} underline href="/blog">
              All blogs
            </Link>
            <p className={styles.description}>
              More insights on design and code.
            </p>
          </div>
        </div>

        <div className={styles.column}>
          <h1 className={styles.section}>Articles</h1>
          <div>
            <div className={styles.article}>
              <Link
                className={styles.link}
                external
                underline
                href="https://overreacted.io/before-you-memo/"
              >
                Before You memo()
              </Link>
              <div className={styles.arrow}>
                <ArrowUpRight />
              </div>
            </div>
            <p className={styles.description}>
              Rendering optimizations that come naturally.
            </p>
          </div>
          <div>
            <div className={styles.article}>
              <Link
                className={styles.link}
                external
                underline
                href="https://kentcdodds.com/blog/inversion-of-control"
              >
                Inversion of control
              </Link>
              <div className={styles.arrow}>
                <ArrowUpRight />
              </div>
            </div>
            <p className={styles.description}>
              Make code less nightmare to use and maintain.
            </p>
          </div>
          <div>
            <div className={styles.article}>
              <Link
                className={styles.link}
                external
                underline
                href="https://pokedexwnext.netlify.app/"
              >
                Next.js rendering
              </Link>
              <div className={styles.arrow}>
                <ArrowUpRight />
              </div>
            </div>
            <p className={styles.description}>
              What is SSR, SSG, CSR, and ISR?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scroller
