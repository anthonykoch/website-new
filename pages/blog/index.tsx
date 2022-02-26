import * as React from 'react'
import superjson from 'superjson'
import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '@/components/app/footer/Footer'
import { PostMeta } from '@/types/index'
import { getAllPostMeta } from '@/utils/post'
import Head from 'next/head'
import { SiteHeader } from '@/components/app/Header'

interface Props {
  posts: PostMeta[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog | Anthony Koch</title>
      </Head>
      <SiteHeader />
      <main>
        <div className="max-w-5xl mx-auto py-24">
          <ul>
            {posts.map((post) => {
              console.log(post)
              return (
                <li key={post.id} className="pb-16  ">
                  <div className="font-display tracking-widest pb-2 font-500 text-[16px]">
                    {post.humanized.created_at}
                  </div>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-900 text-4xl font-heading font-extrabold"
                  >
                    {post.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPostMeta()

  return {
    props: {
      posts: superjson.serialize(posts).json as any,
    },
  }
}

export default Blog
