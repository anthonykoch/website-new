import { RehypeCode } from '@/rehype-plugins/code'
import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

import { markdownComponents } from '@/components/markdown-components'
import { PostList } from '@/components/PostList'
import { Footer } from '@/features/site/footer/Footer'
import { PostMeta } from '@/types'
import { getAllPostMeta, getPostBySlug } from '@/utils/post'
import { BlogHero, BlogPlaceholder } from '@/features/blog/Hero'
import { easeOutExpo } from '@/utils/animation'
import { animate } from 'motion/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
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
        delay: (delay += 0.08),
        ease: easeOutExpo,
        duration: 1,
      },
    )

    animate(
      '.selector-post',
      { opacity: [0, 1] },
      {
        delay: (delay += 0.06),
        ease: easeOutExpo,
        duration: 0.8,
      },
    )
  }, [])

  return (
    <div>
      <div className="absolute top-0 left-0 w-full">
        <BlogHero />
      </div>

      <BlogPlaceholder className="relative z-10">
        <div className="">
          <header className="px-gutter pt-48 relative">
            <div className="max-w-post xl:max-w-post-wide mx-auto">
              <h1
                className="selector-title setup-fade-in text-left text-[42px] lg:text-[52px] 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-800"
                style={{ transform: 'translateY(20px)' }}
              >
                <Link href={asPath} className="text-inherit">
                  {post.title}
                </Link>
              </h1>
              <p
                className="selector-date setup-fade-in mt-4 text-white/90 font-display tracking-widest font-semibold"
                style={{ transform: 'translateY(12px)' }}
              >
                {post.humanized.createdAt}
              </p>
            </div>
          </header>
        </div>
      </BlogPlaceholder>

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
          <div className="py-20 px-gutter max-w-3xl mx-auto">
            <h2 className="text-[14px] tracking-wider pb-5 font-display font-600">
              More from the blog
            </h2>
            <PostList posts={posts} activeId={post.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  const metas = await getAllPostMeta()

  return {
    paths: metas.map((path) => ({
      params: {
        slug: path.slug,
      },
    })),

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
        // @ts-ignore
        [rehypePrism, { showLineNumbers: true }],
        // @ts-ignore
        rehypeSlug,
        [
          // @ts-ignore
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
      posts: posts as any,
      post: post.meta as any,
      slug,
      mdx,
    },
  }
}

export default BlogPost
