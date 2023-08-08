import Post from '@components/post'
import getPosts from '@lib/get-posts'
import renderMarkdown from '@lib/render-markdown'

import postMeta from '@data/blog.json'

export async function generateMetadata({ params }) {
  const post = postMeta.find(post => post.slug === params.slug)
  if (!post) {
    return
  }

  const { title, date, description, image, slug } = post

  const ogImage = image
    ? `https://sdotboro.vercel.app${image}`
    : `https://sdotboro.vercel.app/og?title=${title}&description=${description}`

  console.log('From generateMetaData', ogImage)

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'post',
      date,
      url: `https://sdotboro.vercel.app/blog/${slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

const PostPage = props => {
  return <Post {...props} og={true} />
}

export const getStaticProps = ({ params: { slug } }) => {
  const posts = getPosts()
  const postIndex = posts.findIndex(p => p.slug === slug)
  const post = posts[postIndex]
  const { body, ...rest } = post

  return {
    props: {
      previous: posts[postIndex + 1] || null,
      next: posts[postIndex - 1] || null,
      ...rest,
      html: renderMarkdown(body)
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: getPosts().map(p => `/blog/${p.slug}`),
    fallback: false
  }
}

export default PostPage
