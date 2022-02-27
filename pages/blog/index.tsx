import * as React from 'react'
import cx from 'classnames'
import superjson from 'superjson'
import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '@/components/app/footer/Footer'
import { PostMeta } from '@/types/index'
import { getAllPostMeta } from '@/utils/post'
import Head from 'next/head'
import { SiteHeader } from '@/components/app/Header'
import styles from './blog.index.module.css'

interface Props {
  posts: PostMeta[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  console.log(posts.length)
  return (
    <div>
      <Head>
        <title>Blog | Anthony Koch</title>
      </Head>
      <SiteHeader />
      <main>
        <div className="bg-[#f0f0f0]">
          <div className="max-w-screen-macbook16 mx-auto">
            <ul
              className={cx('flex flex-wrap', {
                [styles.by2Remainder1]: posts.length % 2 === 1,
                [styles.by3Remainder1]: posts.length % 3 === 1,
                [styles.by3Remainder2]: posts.length % 3 === 2,
              })}
            >
              {posts.map((post) => {
                return (
                  <li
                    key={post.id}
                    className={cx(
                      'hover:bg-[#e8b92c]',
                      styles.BlogPostListing__Item,
                    )}
                  >
                    <a
                      href={`/blog/${post.slug}`}
                      className="py-12 xl:py-20 px-16 block"
                    >
                      <div className="font-body pb-2 uppercase tracking-widest font-700 text-[13px] text-black/50">
                        {post.humanized.created_at}
                      </div>
                      <div className="text-black/90   text-[24px] leading-[1.4] font-heading font-800">
                        <span className="max-w-[200px] ">{post.title}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
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
