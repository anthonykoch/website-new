import type { GetStaticProps, NextPage } from 'next'
import cx from 'classnames'
import * as React from 'react'
import superjson from 'superjson'
import { useRouter } from 'next/router'
import rehypePrism from 'rehype-prism-plus'
import { RehypeCode } from '@/rehype-plugins/code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import {
  SiteHeader,
  SiteHeaderBackground,
  SiteHeaderPlaceholder,
} from '@/components/app/Header'
import { Footer } from '@/components/app/footer/Footer'
import { getAllPostMeta, getPostBySlug, getPostsPaths } from '@/utils/post'
import { PostMeta } from '@/types'
import { markdownComponents } from '@/components/markdown-components'

// type MDXSource = Awaited<ReturnType<typeof serialize>>

interface Props {
  // mdxSource: MDXSource
  post: PostMeta
  slug: string
  posts: PostMeta[]
}

const BlogPost: NextPage<Props> = ({  post, posts }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <SiteHeader isAbsolute />

      <main>
        {/* <SiteHeaderPlaceholder className="relative">
          <SiteHeaderBackground>
            <div className="Post-headerBackground">
              <header className="Post-header px-gutter top-48 relative">
                <div className="max-w-post xl:max-w-postWide  mx-auto">
                  <h1 className="text-left text-4xl 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-black">
                    <a href={asPath}>{post.title}</a>
                  </h1>
                  <p className="mt-4 text-white font-display tracking-widest font-semibold ">
                    {post.humanized.created_at}
                  </p>
                </div>
              </header>
            </div>
          </SiteHeaderBackground>
        </SiteHeaderPlaceholder> */}

        {/* <BlogToolbar slot="before" :top="top"></blog-toolbar> */}

        <article className="Post" id="post">
          <div className="Post-content">
            <div
              // ref="body"
              className="Post-body md pt-20 pb-24"
              // style="animation-delay: 0.3s"
            >
              {/* <MDXRemote
                {...mdxSource}
                components={markdownComponents as any}
              /> */}
              {/* <capture-fullscreen :images="true">
                </capture-fullscreen> */}
            </div>
          </div>
        </article>

        {/* 
        <div className="u-gutter">
            <div className="Meme" v-if="body">
              <nuxt-link className="Meme-item is-left" v-if="next" :to="next.url">
                <icon-arrow-round-left className="Meme-arrow is-left"></icon-arrow-round-left>
                <p>{{ next.title }}</p>
              </nuxt-link>
              <nuxt-link className="Meme-item is-right" v-if="previous" :to="previous.url">
                <p>{{ previous.title }}</p>
                <icon-arrow-round-right className="Meme-arrow is-right"></icon-arrow-round-right>
              </nuxt-link>
            </div>
          </div> 
        */}

        <div className="bg-[#f3f3f3]">
          <div className="py-20 px-gutter max-w-3xl mx-auto">
            <h2 className="text-[18px] pb-5 font-heading font-900">
              More from the blog
            </h2>
            <ul className="PostsList">
              {/* {posts.map((listing) => (
                <li
                  key={listing.slug}
                  className={cx({
                    ['is-active']: listing.id === post.id,
                  })}
                >
                  <a
                    href={`/blog/${listing.slug}`}
                    className="PostsList-link"
                    onClick={(e) => {
                      post.id === listing.id && e.preventDefault()
                    }}
                  >
                    <time dateTime={listing.created_at}>
                      {listing.humanized.created_at}
                    </time>
                    <span>{listing.title}</span>
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const paths = await getPostsPaths()

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const { slug } = params as { slug: string }
//   const posts = (await getAllPostMeta()).slice(0)
//   const post = (await getPostBySlug(slug))!

//   const mdxSource = await serialize(post.content, {
//     scope: post.meta.data,
//     mdxOptions: {
//       rehypePlugins: [
//         [RehypeCode, {}],
//         [rehypePrism, { showLineNumbers: true }],
//         rehypeSlug,
//         [
//           rehypeAutolinkHeadings,
//           {
//             behavior: ['after'],
//           },
//         ],
//       ],
//     },
//   })

//   return {
//     props: {
//       posts: superjson.serialize(posts).json as any,
//       post: superjson.serialize(post.meta).json as any,
//       slug,
//       mdxSource,
//     },
//   }
// }

export default BlogPost
