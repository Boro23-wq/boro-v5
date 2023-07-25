import Page from '@components/page'
import Link from '@components/link'
import Scroller from '@components/scroller'

const About = () => {
  return (
    <Page
      title="Home"
      description="I'm Boro, a software designer and developer based in Madison, WI. I build web applications with high-impact user experience, and also write about interesting technologies."
    >
      <div>
        <h1>Sintu Boro</h1>
        <p>
          <em>Building experiences.</em> I'm Boro, a software designer and
          developer. I build web applications with a focus on performance,
          user-centric design, and high-impact user experience.{' '}
        </p>

        <p>
          I{' '}
          <Link underline href="/blog">
            write
          </Link>{' '}
          technical blogs primarily focused on full-stack development. My posts
          often delve into front-end technologies providing valuable insights
          and information.
        </p>
      </div>

      <div basics-scroller="">
        <Scroller />
      </div>

      <div>
        <h1>Now</h1>
        <p>
          Self-motivated developer with over three years of experience in
          full-stack web development. I have previously built and delivered{' '}
          <em>highly performant, design-centric</em> web applications with
          excellent user experiences.
        </p>
        <p>
          Currently teamed up with{' '}
          <Link underline href="https://wavedds.com" external>
            Wave DDS
          </Link>{' '}
          to make swimming safer.
        </p>
      </div>
      <h1>Connect</h1>
      <p>
        Reach me at{' '}
        <Link underline href="https://linkedin.com/in/sintu-boro" external>
          boro@linkedin
        </Link>{' '}
        or{' '}
        <Link underline href="https://twitter.com/sdotboro" external>
          boro@twitter.
        </Link>{' '}
      </p>
    </Page>
  )
}

export default About
