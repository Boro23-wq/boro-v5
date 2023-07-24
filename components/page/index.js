import Head from '@components/head'
import Header from '@components/header'
import Footer from '@components/footer'

import Link from '@components/link'
import styles from './page.module.css'

const Page = ({
  header = true,
  footer = true,
  title,
  description,
  image,
  showHeaderTitle = true,
  children
}) => {
  return (
    <div className={styles.wrapper}>
      <Head
        title={`${title ? `${title} - ` : ''}Sintu Boro`}
        description={description}
        image={image}
      />

      {header && <Header title={showHeaderTitle && title !== 'Home'} />}
      <main className={styles.main}>
        <div className={styles.grid}>
          {title !== 'Home' && (
            <nav className={styles.container}>
              <Link href="/">
                <div className={styles.nav}>
                  <em className={styles.arrow}>⤺</em>
                  <em className={styles.title}>Home</em>
                </div>
              </Link>
            </nav>
          )}
          <article className={styles.article}>{children}</article>
        </div>
      </main>
      {footer && <Footer />}
    </div>
  )
}

export default Page
