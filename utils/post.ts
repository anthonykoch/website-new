import { readFile } from 'fs/promises'
import path from 'path'
import slugify from 'slugify'
import * as datefns from 'date-fns'
import type { Post, PostMeta, PostMetaRaw, PostMetaWithFile } from '../types'
import glob from 'fast-glob'
import { UTCDate } from '@date-fns/utc'

const isDev = process.env.NODE_ENV === 'development'

export const getMetaFiles = () => {
  return glob(path.join(process.cwd(), 'public/posts/**/meta.(t|j)s'))
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  for (const meta of await getAllPostMetaInternal()) {
    const { filename, ...rest } = meta

    const postDir = path.join(filename, '..')
    const [contentPath] = await glob(path.join(postDir, 'index.{md,mdx}'))

    if (contentPath == null)
      throw new Error(`Markdown file does not exist: "${contentPath}"`)

    const content = await readFile(contentPath, 'utf-8')

    const post: Post = {
      content,
      meta: rest,
    }

    if (meta.slug === slug.toLowerCase()) return post

    if (
      slug.toLowerCase() === slugify(meta.title, { lower: true, strict: true })
    ) {
      return post
    }
  }

  return null
}

export const enrichPostMeta = (
  meta: PostMetaRaw,
  { filename }: { filename: string },
): PostMetaWithFile => {
  // console.log(meta.createdAt)
  return {
    filename,
    ...meta,
    slug: slugify(meta.title, { lower: true, strict: true }),
    humanized: {
      createdAt: datefns.format(new UTCDate(meta.createdAt), 'MMMM, d y'),
    },
  }
}

export const getPostMetaByFilename = async (filename: string) => {
  // This purely exists because of the stupidity of import() in wepback
  const folder = extractFolderFromFilename(filename)

  const {
    default: metaImport,
  }: { default: PostMeta | (() => Promise<PostMeta>) } = await import(
    // This can't be too dynamic because it won't work with webpack
    `../public/posts/${folder}/meta.ts`
  )

  const meta =
    typeof metaImport === 'function' ? await metaImport() : metaImport

  return enrichPostMeta(meta, { filename })
}

export const extractFolderFromFilename = (filename: string) => {
  if (!path.isAbsolute(filename)) throw new Error('path is not absolute')

  if (path.extname(filename).trim() === '')
    throw new Error('Filename should lead to file with ext')

  const folder = path.basename(path.dirname(filename))

  if (!filename.trim() || folder == null)
    throw new Error('Folder slug is empty')

  return folder
}

export const getAllPostMetaInternal = async (): Promise<PostMetaWithFile[]> => {
  const filenames = await getMetaFiles()
  const promises = filenames.map((filename) => getPostMetaByFilename(filename))

  return (await Promise.all(promises))
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    .filter((post) => (isDev ? true : post.isPublished !== false))
}

export const getAllPostMeta = async (): Promise<PostMeta[]> => {
  return (await getAllPostMetaInternal()).map(({ filename, ...meta }) => meta)
}

export const getPostSlug = (filename: string) => {
  return path.basename(path.dirname(filename)).slice(11)
}

export const getPostDate = (filename: string) => {
  return path.basename(path.dirname(filename)).slice(0, 10)
}
