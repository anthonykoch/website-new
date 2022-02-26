import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import * as React from 'react'
import matter from 'gray-matter'
import superjson from 'superjson'
import { MDXProvider } from '@mdx-js/react'
import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '@/components/app/footer/Footer'
import { PostMeta } from '@/types/index'
import { SiteHeader } from '@/components/app/Header'

const components = {}

interface Props {
  posts: PostMeta[]
}

const getPostsFilenames = async () => {
  const files = fs
    .readdirSync(path.join('posts'))
    .map((filename) => 'posts/' + filename)

  return files
}

const getPosts = async (): Promise<PostMeta[]> => {
  return (await getPostsFilenames()).map((filename) => {
    const { data: meta } = matter(fs.readFileSync(filename, 'utf-8'))

    return {
      ...meta,
      slug: slugify(meta.title).toLowerCase(),
    } as PostMeta
  })
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <MDXProvider components={components}>
      <main>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
    </MDXProvider>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts: superjson.serialize(posts).json as any,
    },
  }
}

export default Blog
