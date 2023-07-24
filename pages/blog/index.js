import React from 'react'

import Page from '@components/page'
import PostsList from '@components/posts-list'
import getPosts from '@lib/get-posts'

const Blog = ({ posts }) => {
  return (
    <Page
      title="Blog"
      description="I write about technologies, best coding practices, and development at large."
    >
      <PostsList posts={posts} paginate={false} />
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default Blog
