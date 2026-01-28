import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

export default async () => {
  const title = `Integrating lazy loading into a ghost blog`

  return {
    title: title,
    slug: slugify(title),
    createdAt: getPostDate(__filename),
    id: 12,
    data: {},
  }
}
