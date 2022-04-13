import * as React from 'react'
import cx from 'classnames'
import Head from 'next/head'
import superjson from 'superjson'
import type { GetStaticProps, NextPage } from 'next'
import { Footer } from '@/components/app/footer/Footer'
import { PostMeta } from '@/types/index'
import { getAllPostMeta } from '@/utils/post'
import {
  SiteHeader,
  SiteHeaderBackground,
  SiteHeaderPlaceholder,
} from '@/components/app/Header'
import styles from './blog.index.module.css'

interface Props {
  posts: PostMeta[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog | Anthony Koch</title>
      </Head>

      <SiteHeader isAbsolute />

      <main>
        <SiteHeaderPlaceholder className="relative">
          <SiteHeaderBackground>
            <div className="max-w-lg xl:max-w-4xl mx-auto px-gutter-lg pt-40 xl:pt-52">
              <h1 className="text-[22px] font-600 font-display text-primary-500 pb-4 tracking-[2.5px]">
                My Writings
              </h1>
              <p className="font-body text-white/90 xl:text-[18px] text-[16px]">
                These are my various writings, mostly on topics surrounding
                front-end development.
              </p>
            </div>
          </SiteHeaderBackground>
        </SiteHeaderPlaceholder>

        <div className="bg-[#f0f0f0] z-10 relative">
          <div className="max-w-screen-macbook16 mx-auto">
            <ul
              className={cx('flex flex-wrap', {
                [styles.by2Remainder1]: posts.length % 2 === 1,
                [styles.by3Remainder1]: posts.length % 3 === 1,
                [styles.by3Remainder2]: posts.length % 3 === 2,
              })}
            >
              {posts.map((post, index) => {
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
                      className="py-12 xl:py-20 px-gutter-lg xl:px-16 block relative"
                    >
                      <div className="font-body pb-2 uppercase tracking-widest font-700 text-[13px] text-black/50">
                        {post.humanized.created_at} - #{posts.length - index}
                      </div>
                      <div className="text-black/90 text-[24px] leading-[1.2] xl:leading-[1.4] font-heading font-800">
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
