import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import cx from 'classnames'
import * as React from 'react'
import superjson from 'superjson'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import rehypePrism from 'rehype-prism-plus'
import { RehypeCode } from '@/rehype-plugins/code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { SiteHeader, SiteHeaderPlaceholder } from '@/components/app/Header'
import { Footer } from '@/components/app/footer/Footer'
import { getPostBySlug, getPostsPaths } from '@/utils/post'
import { PostMeta } from '@/types'

type MDXSource = Awaited<ReturnType<typeof serialize>>

interface Props {
  mdxSource: MDXSource
  meta: PostMeta
  slug: string
}

const Anchor: React.FC<any> = (props) => {
  let p: Record<string, any> = {} as any
  const router = useRouter()

  if (props.href) {
    try {
      const url = new URL(props.href)
      const HOSTNAME = 'anthonykoch.com'

      if (!url.hostname.endsWith(HOSTNAME)) {
        p = { ...p, target: '_blank', rel: 'noreferrer noopener ' }
      }
    } catch (err) {}
  }

  return <a className="text-link hover:text-link-hover" {...props} {...p} />
}

const UnorderedList: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul {...props} className={cx('list-bullet', className)}>
      {children}
    </ul>
  )
}

const OrderedList: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ol {...props} className={cx('list-number', className)}>
      {children}
    </ol>
  )
}

const components = {
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
}

const BlogPost: NextPage<Props> = ({ mdxSource, meta }) => {
  const { asPath } = useRouter()

  return (
    <div>
      <SiteHeader isAbsolute />

      <main>
        <SiteHeaderPlaceholder>
          <div className="Post-headerBackground">
            <header className="Post-header px-gutter top-48 relative">
              <div className="max-w-post xl:max-w-postWide  mx-auto">
                <h1 className="text-left text-4xl 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-black">
                  <a href={asPath}>{meta.title}</a>
                </h1>
                <p className="mt-4 text-white font-display tracking-widest font-semibold ">
                  {meta.humanized.created_at}
                </p>
              </div>
            </header>
          </div>
        </SiteHeaderPlaceholder>

        {/* <BlogToolbar slot="before" :top="top"></blog-toolbar> */}

        <article className="Post" id="post">
          <div className="Post-container">
            <div className="Post-content">
              <div
                // ref="body"
                className="Post-body md pt-20 pb-24"
                // style="animation-delay: 0.3s"
              >
                <MDXRemote {...mdxSource} components={components} />
                {/* <capture-fullscreen :images="true">
                </capture-fullscreen> */}
                <div className="u-gutter">
                  <div className="Meme" v-if="body">
                    <Link href="/" className="Meme-item is-left" to="next.url">
                      {/* <icon-arrow-round-left className="Meme-arrow is-left"></icon-arrow-round-left> */}
                      <a>Hello</a>
                    </Link>
                    <Link
                      href="/awd"
                      className="Meme-item is-right"
                      to="previous.url"
                    >
                      <a>World</a>
                      {/* <icon-arrow-round-right className="Meme-arrow is-right"></icon-arrow-round-right> */}
                    </Link>
                  </div>
                </div>
              </div>
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

        <ul>
          <li class="is-active">
            <a
              href="/blog/Integrating-lazy-loading-into-a-ghost-blog"
              disabled="disabled"
              class="PostsList-link"
            >
              <time datetime="2020-03-04T00:00:00.000Z">March, 3 2020</time>
              <span>Integrating lazy loading into a ghost blog</span>
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = await getPostsPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { slug } = params as { slug: string }
  const post = (await getPostBySlug(slug))!
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        [RehypeCode, {}],
        [rehypePrism, { showLineNumbers: true }],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: ['after'],
          },
        ],
      ],
    },
  })

  return {
    props: {
      meta: superjson.serialize(post.meta).json as any,
      slug,
      mdxSource,
    },
  }
}

export default BlogPost
