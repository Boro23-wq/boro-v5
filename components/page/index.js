import Head from '@components/head'
import Header from '@components/header'
import Footer from '@components/footer'

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

      {header && <Header title={showHeaderTitle && title} />}
      <main className={styles.main}>
        <div className={styles.grid}>
          <article className={styles.article}>{children}</article>
        </div>
      </main>
      {footer && <Footer />}
    </div>
  )
}

export default Page
