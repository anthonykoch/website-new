import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import * as datefns from 'date-fns'
import type { Post, PostMeta } from '../types'
import glob from 'fast-glob'

const isDev = process.env.NODE_ENV === 'development'

const pattern = path.join(process.cwd(), 'public/posts/**/*.{md,mdx}')

export const getPostsFilenames = async () => {
  return glob.sync(pattern)
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  for (const filename of await getPostsFilenames()) {
    const content = fs.readFileSync(filename, 'utf-8')
    const meta = await getPostMetaByFilename(filename)

    const post = {
      content,
      meta,
    }

    if (meta.slug === slug.toLowerCase()) return post

    if (slug.toLowerCase() === slugify(meta.title).toLowerCase()) {
      return post
    }
  }

  return null
}

export const getPostMetaByFilename = async (filename: string) => {
  const folder = path.basename(path.dirname(filename))

  const {
    default: metaImport,
  }: { default: PostMeta | (() => Promise<PostMeta>) } = await import(
    `../public/posts/${folder}/meta`
  )

  const meta =
    typeof metaImport === 'function' ? await metaImport() : metaImport

  return {
    ...meta,
    slug: slugify(meta.title).toLowerCase(),
    humanized: {
      createdAt: datefns.format(new Date(meta.createdAt), 'MMMM, d y'),
    },
  }
}

export const getAllPostMeta = async (): Promise<PostMeta[]> => {
  const promises = (await getPostsFilenames()).map((filename) =>
    getPostMetaByFilename(filename),
  )

  return (await Promise.all(promises))
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    .filter((post) => (isDev ? true : post.isPublished !== false))
}

export const getPostTitle = (filename: string) => {
  return path.basename(path.dirname(filename)).slice(11)
}

export const getPostDate = (filename: string) => {
  return path.basename(path.dirname(filename)).slice(0, 10)
}
