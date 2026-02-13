import BlogPost from '@/features/blog/BlogPost'
import { getAllPostMeta, getPostBySlug } from '@/utils/post'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { notFound } from 'next/navigation'
import { markdownComponents } from '@/components/markdown-components'
import graymatter from 'gray-matter'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import theme from 'shiki/themes/material-theme-ocean.mjs' // Example theme
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers'

// import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkSmartypants from 'remark-smartypants'
import remarkGfm from 'remark-gfm'

export default async function BlogPostSlug({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const post = await getPostBySlug(slug)
  const posts = await getAllPostMeta()

  if (!post) {
    notFound()
  }

  const { filename, ...meta } = post.meta
  const { content } = graymatter(post.content)

  return (
    <BlogPost posts={posts} meta={meta}>
      <MDXRemote
        source={content}
        components={markdownComponents}
        options={{
          scope: meta.data,
          mdxOptions: {
            remarkPlugins: [
              remarkSmartypants,
              remarkGfm,
              // [remarkMdxEvalCodeBlock, filename],
            ] as any,
            rehypePlugins: [
              // rehypePrism,
              [
                rehypePrettyCode,
                {
                  theme,
                  transformers: [
                    transformerNotationDiff(),
                    transformerNotationHighlight(),
                  ],
                },
              ],
              rehypeAutolinkHeadings,
              rehypeSlug,
            ] as any,
          },
        }}
      />
    </BlogPost>
  )
}

export async function generateStaticParams() {
  const posts = await getAllPostMeta()

  return posts.map((post) => {
    return {
      slug: post.slug,
    }
  })
}
