/* eslint-disable no-mixed-operators */
import { useRouter } from 'next/router'
import Head from '@components/head'
import Header from '@components/header'
import Footer from '@components/footer'
import ArrowBendLeft from '@components/icons/arrow-bend-left'

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
  const titlesToRenderHomeLink = ['Blog', 'Social', 'Projects', 'Articles']
  const shouldRenderHomeLink = titlesToRenderHomeLink.includes(title)
  const router = useRouter()

  const goTo = route => {
    router.push(route)
  }

  return (
    <div className={styles.wrapper}>
      <Head
        title={`${title ? `${title} - ` : ''}Boro`}
        description={description}
        image={image}
      />

      {header && <Header title={title !== 'Home' && title} />}

      <main className={styles.main}>
        <div className={styles.grid}>
          {shouldRenderHomeLink && (
            <nav className={styles.container}>
              <div onClick={() => goTo('/')} className={styles.nav}>
                <ArrowBendLeft className={styles.icon} />
                <em className={styles.title}>Home</em>
              </div>
            </nav>
          )}

          {!shouldRenderHomeLink && title !== 'Home' && (
            <nav className={styles.container}>
              <div onClick={() => goTo('/blog')} className={styles.nav}>
                <ArrowBendLeft />
                <em className={styles.title}>Blog</em>
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
