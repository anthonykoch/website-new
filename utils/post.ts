import fs, { promises as fomise } from 'fs'
import path from 'path'
import slugify from 'slugify'
import matter from 'gray-matter'
import * as datefns from 'date-fns'
import type { Post, PostMeta } from '../types'
import { compile } from '@mdx-js/mdx'
import glob from 'fast-glob'

const pattern = path.join(process.cwd(), 'posts/**/*.{md,mdx}')

interface Path {
  params: {
    slug: string
  }
}

export const getPostsPaths = async (): Promise<Path[]> => {
  const files = await getPostsFilenames()

  const paths = files.map(async (filename) => {
    const folder = path.basename(path.dirname(filename))

    const { default: meta }: { default: any } = await import(
      `../posts/${folder}/meta`
    )

    console.log(meta)

    return {
      params: {
        slug:
          typeof meta.slug === 'string'
            ? meta.slug.toLowerCase()
            : slugify(meta.title).toLowerCase(),
      },
    }
  })

  return Promise.all(paths)
}

export const getPostsFilenames = async () => {
  return glob.sync(pattern)
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  for (const filename of await getPostsFilenames()) {
    const content = fs.readFileSync(filename, 'utf-8')
    const folder = path.basename(path.dirname(filename))

    const { default: meta }: { default: PostMeta } = await import(
      `../posts/${folder}/meta`
    )

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

    const { default: meta }: { default: PostMeta } = await import(
      `../posts/${folder}/meta`
    )

    return {
      ...meta,
      slug: slugify(meta.title).toLowerCase(),
      humanized: {
        created_at: datefns.format(new Date(meta.created_at), 'MMMM, d y'),
      },
    }
  })

  return Promise.all(promises)
}
