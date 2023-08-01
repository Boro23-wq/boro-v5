import cn from 'classnames'
import Link from '@components/link'
import Scroller from '@components/scroller'

import styles from './home.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.section}>
        <h1
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '0ms' }}
        >
          Sintu Boro
        </h1>
        <p
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <em>Building experiences.</em> I'm Boro, a software designer and
          developer. I build web applications with a focus on performance,
          user-centric design, and high-impact user experience.{' '}
        </p>

        <p
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '400ms' }}
        >
          I{' '}
          <Link underline href="/blog">
            write
          </Link>{' '}
          technical blogs primarily focused on full-stack development. My posts
          often delve into front-end technologies providing valuable insights
          and information.
        </p>
      </div>

      {/* scroller */}
      <div
        basics-scroller=""
        animate=""
        className={cn(styles.section, 'animate fade-in')}
        style={{ animationDelay: '600ms' }}
      >
        <Scroller />
      </div>

      <div className={styles.section}>
        <h1
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '800ms' }}
        >
          Now
        </h1>
        <p
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '1000ms' }}
        >
          Self-motivated developer with over three years of experience in
          full-stack web development. I have previously built and delivered{' '}
          <em>highly performant, design-centric</em> web applications with
          excellent user experiences.
        </p>
        <p
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '1200ms' }}
        >
          Currently teamed up with{' '}
          <Link underline href="https://wavedds.com" external>
            Wave DDS
          </Link>{' '}
          to make swimming safer.
        </p>
      </div>

      {/* connect */}
      <div className={styles.section}>
        <h1
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '1400ms' }}
        >
          Connect
        </h1>
        <p
          animate=""
          className="animate fade-in"
          style={{ animationDelay: '1600ms' }}
        >
          Reach me at{' '}
          <Link underline href="https://linkedin.com/in/sintu-boro" external>
            boro@linkedin
          </Link>{' '}
          or{' '}
          <Link underline href="https://twitter.com/sdotboro" external>
            boro@twitter.
          </Link>{' '}
        </p>
      </div>
    </>
  )
}

export default Home
