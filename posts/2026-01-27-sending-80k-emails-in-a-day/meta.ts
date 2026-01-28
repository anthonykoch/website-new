import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

export default async () => {
  const title = `Sending 80k emails in a day`
  
  return {
    title: title,
    slug: slugify(title),
    createdAt: getPostDate(__filename),
    id: 13,
    data: {},
  }
}
