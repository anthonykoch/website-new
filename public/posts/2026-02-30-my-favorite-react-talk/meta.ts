import { PostMetaRaw } from '@/types'
import { getPostDate, getPostSlug } from '@/utils/post'
import slugify from 'slugify'

export default async (): Promise<PostMetaRaw> => {
  const title = `My favorite react talk`
  return {
    title: title,
    slug: slugify(title),
    createdAt: getPostDate(__filename),
    id: 15,
    isPublished: false,
    data: {},
  }
}
