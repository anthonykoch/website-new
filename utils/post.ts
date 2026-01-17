import * as datefns from 'date-fns'
import glob from 'fast-glob'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import slugify from 'slugify'
import type { Post, PostMeta } from '../types'

const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')
// const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')

interface Path {
  params: {
    slug: string
  }
}

export const getPosts = async (): Promise<
  Array<{
    id: string
    title: string
    createdAt: string
    folder: string
    slug: string
    humanized: {
      createdAt: string
    }
  }>
> => {
  const files = await getPostsFilenames()

  const metadata = files.map(async (filename) => {
    const contents = await fs.readFile(filename, 'utf-8')
    const folder = path.basename(path.dirname(filename))

    const {
      data: { id, title, createdAt },
    } = matter(contents)

    return {
      id,
      title,
      folder,
      createdAt,
      humanized: {
        createdAt: datefns.format(new Date(createdAt), 'MMMM, d y'),
      },
      slug: folder.slice(11).toLowerCase(),
    }
  })

  return Promise.all(metadata).then((meta) =>
    meta.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
  )
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
        slug: slugify(meta.title),
        humanized: {
          created_at: datefns.format(new Date(meta.created_at), 'MMMM, d y'),
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
        created_at: datefns.format(new Date(meta.created_at), 'MMMM, d y'),
      },
    }
  })

  return (await Promise.all(promises)).sort((a, b) => {
    // @ts-ignore
    return new Date(b.created_at) - new Date(a.created_at)
  })
}
