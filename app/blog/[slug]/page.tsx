'use server'

import BlogPost from '@/features/blog/BlogPost'
import { getPosts } from '@/utils/post'
import fs from 'fs/promises'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { notFound } from 'next/navigation'

import { markdownComponents } from '@/components/markdown-components'
import { RehypeCode } from '@/rehype-plugins/code'
import graymatter from 'gray-matter'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

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
