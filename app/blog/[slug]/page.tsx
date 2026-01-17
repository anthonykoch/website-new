'use server'

import fs from 'fs/promises'
import { Footer } from '@/features/site/footer/Footer'
// import { PostList } from '@/components/PostList'
import { BlogHero } from '@/features/blog/Hero'
// import { PostMeta } from '@/types/index'
// import { easeOutExpo } from '@/utils/animation'
import { getPosts } from '@/utils/post'
import { PostList } from '@/components/PostList'
// import { usePathname } from 'next/navigation'
// import { animate } from 'motion/react'
// import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import BlogPost from '@/features/post/BlogPost'
import { MDXRemote } from 'next-mdx-remote-client/rsc'

import rehypePrism from 'rehype-prism-plus'
import { RehypeCode } from '@/rehype-plugins/code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { markdownComponents } from '@/components/markdown-components'
import graymatter from 'gray-matter'

import path from 'path'
const postsDir = path.join(process.cwd(), 'posts')

export default async function BlogPostSlug({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const posts = await getPosts()

  const post = posts.find((post) => {
    console.log(post.slug, slug)
    return post.slug === slug
  })

  if (!post) {
    notFound()
  }
  // console.log(posts)

  const file = await fs.readFile(path.join(postsDir, post.folder, 'index.mdx'))
  const { content } = graymatter(file)

  return (
    <BlogPost posts={posts} post={post}>
      <MDXRemote
        source={content}
        components={markdownComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [
              // remarkSmartpants,
              // remarkGfm,
              // [remarkMdxEvalCodeBlock, filename],
            ] as any,
            rehypePlugins: [
              rehypePrism,
              RehypeCode,
              rehypeAutolinkHeadings,
              // [
              //   rehypePrettyCode,
              //   {
              //     theme: overnight,
              //     defaultLang: { block: 'text' },
              //   },
              // ],
              rehypeSlug,
            ] as any,
          },
        }}
      />
      {/* <Component /> */}
    </BlogPost>
  )
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => {
    return {
      slug: post.slug,
    }
  })
}
