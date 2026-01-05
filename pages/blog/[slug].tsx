import type { GetStaticProps, NextPage } from 'next'
import cx from 'classnames'
import React, { useEffect } from 'react'
import superjson from 'superjson'
import { useRouter } from 'next/router'
import rehypePrism from 'rehype-prism-plus'
import { RehypeCode } from '@/rehype-plugins/code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

import { Footer } from '@/components/app/footer/Footer'
import { getAllPostMeta, getPostBySlug, getPostsPaths } from '@/utils/post'
import { PostMeta } from '@/types'
import { markdownComponents } from '@/components/markdown-components'
import { SiteNavigation } from '@/features/navigation/SiteNavigation'
import { PostList } from '@/components/PostList'
// import { serialize } from 'superjson'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { BlogHero } from '@/features/blog/Hero'
import { animate } from 'motion/react'
import { easeOutExpo } from '@/utils/animation'
import Link from 'next/link'

type MDXSource = Awaited<ReturnType<typeof serialize>>

interface Props {
  mdx: MDXSource
  post: PostMeta
  slug: string
  posts: PostMeta[]
}

const BlogPost: NextPage<Props> = ({ post, posts, mdx }) => {
  const { asPath } = useRouter()

  useEffect(() => {
    let delay = 0.5

    animate(
      '.selector-title',
      { y: [20, 0], opacity: [0, 1] },
      {
        delay: delay,
        ease: easeOutExpo,
        duration: 1,
      },
    )

    animate(
      '.selector-date',
      { y: [12, 0], opacity: [0, 1] },
      {
        delay: delay += 0.08,
        ease: easeOutExpo,
        duration: 1,
      },
    )

    animate(
      '.selector-post',
      {  opacity: [0, 1] },
      {
        delay: delay += 0.06,
        ease: easeOutExpo,
        duration: 0.8,
      },
    )
  }, [])

  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-1000">
        <div className="max-w-site mx-auto">
          <SiteNavigation colorVariant="white" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full">
        <BlogHero />
      </div>

      {/* <div className="absolute top-0 left-0 w-full z-1000"></div> */}

      <div className="h-[500px]  relative z-10">
        {/* <div className="h-[500px] bg-[#f8f7f8]"> */}
        <div className="">
          <header className="px-gutter pt-48 relative">
            <div className="max-w-post xl:max-w-post-wide  mx-auto">
              <h1 className="selector-title setup-fade-in text-left text-[42px] lg:text-[52px] 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-800">
                {/* <h1 className="text-left text-4xl 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-600"> */}
                <Link href={asPath} className="text-inherit">
                  {post.title}
                </Link>
              </h1>
              <p className="selector-date setup-fade-in mt-4 text-white/90 font-display tracking-widest font-semibold ">
                {post.humanized.created_at}
              </p>
            </div>
          </header>
        </div>
      </div>

      {/* <div className="lg:pb-20 pb-40"></div> */}

      <main>
        <article id="post">
          <div className="setup-fade-in selector-post">
            <div className="md pt-20 pb-24">
              <MDXRemote {...mdx} components={markdownComponents as any} />
            </div>
          </div>
        </article>

        <div className="bg-white">
          {/* <div className="bg-[#f3f3f3]"> */}
          <div className="py-20 px-gutter max-w-3xl mx-auto">
            <h2 className="text-[14px] tracking-wider pb-5 font-display font-600">
              More from the blog
            </h2>
            {/* <h2 className="text-[18px] pb-5 font-heading font-900">
              More from the blog
            </h2> */}
            <PostList posts={posts} activeId={post.id} />
          </div>
        </div>
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
  const posts = (await getAllPostMeta()).slice(0)
  const post = (await getPostBySlug(slug))!

  const mdx = await serialize(post.content, {
    scope: post.meta.data,
    mdxOptions: {
      format: 'mdx',
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
      posts: superjson.serialize(posts).json as any,
      post: superjson.serialize(post.meta).json as any,
      slug,
      mdx,
      // mdxSource,
    },
  }
}

export default BlogPost
