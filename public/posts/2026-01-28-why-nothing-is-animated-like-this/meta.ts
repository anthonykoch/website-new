import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

export default async () => {
  const title = `Why nothing is animated like this`
  
  return {
    title: title,
    slug: slugify(title).toLocaleLowerCase(),
    createdAt: getPostDate(__filename),
    id: 14,
    isPublished: false,
    data: {},
  }
}
