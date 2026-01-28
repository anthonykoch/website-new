import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import * as datefns from 'date-fns'
import type { Post, PostMeta } from '../types'
import glob from 'fast-glob'

const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')

interface Path {
  params: {
    slug: string
  }
}

export const getPostsPaths = async (): Promise<Path[]> => {
  const isDev = process.env.NODE_ENV === 'development'

  const files = await getPostsFilenames()

  const paths = files.map(async (filename) => {
    const folder = path.basename(path.dirname(filename))

    const { default: metaImport }: { default: any } = await import(
      `../posts/${folder}/meta`
    )

    const meta =
      typeof metaImport === 'function' ? await metaImport() : metaImport

    return {
      params: {
        slug: isDev
          ? null
          : typeof meta.slug === 'string'
          ? meta.slug.toLowerCase()
          : slugify(meta.title).toLowerCase(),
      },
    }
  })

  return (await Promise.all(paths)).filter((data) => data.params.slug)
}

export const getPostsFilenames = async () => {
  return glob.sync(pattern)
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  for (const filename of await getPostsFilenames()) {
    const content = fs.readFileSync(filename, 'utf-8')
    const folder = path.basename(path.dirname(filename))

    const {
      default: metaImport,
    }: { default: PostMeta | (() => Promise<PostMeta>) } = await import(
      `../posts/${folder}/meta`
    )

    const meta =
      typeof metaImport === 'function' ? await metaImport() : metaImport

    const post = {
      content,
      meta: {
        ...meta,
        humanized: {
          createdAt: datefns.format(new Date(meta.createdAt), 'MMMM, d y'),
        },
      },
    }

    if (meta.slug === slug.toLowerCase()) return post

    if (slug.toLowerCase() === slugify(meta.title).toLowerCase()) {
      return post
    }
  }

  return null
}

export const getAllPostMeta = async (): Promise<PostMeta[]> => {
  const promises = (await getPostsFilenames()).map(async (filename) => {
    const folder = path.basename(path.dirname(filename))

    const {
      default: metaImport,
    }: { default: PostMeta | (() => Promise<PostMeta>) } = await import(
      `../posts/${folder}/meta`
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
  })

  return (await Promise.all(promises)).sort((a, b) => {
    // @ts-ignore
    return new Date(b.createdAt) - new Date(a.createdAt)
  })
}

export const getPostTitle = (filename: string) => {
  return path.basename(path.dirname(filename)).slice(11)
}

export const getPostDate = (filename: string) => {
  return path.basename(path.dirname(filename)).slice(0, 10)
}
