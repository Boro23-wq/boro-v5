import { useRouter } from 'next/router'
import Head from '@components/head'
import Header from '@components/header'
import Footer from '@components/footer'
import ArrowLeft from '@components/icons/arrow-left'

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
  const router = useRouter()

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
              <div onClick={router.back} className={styles.nav}>
                <ArrowLeft />
                <em className={styles.title}>Return</em>
              </div>
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
