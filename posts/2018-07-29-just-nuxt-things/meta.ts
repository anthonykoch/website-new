import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = 'Just Nuxt Things'

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 7,
}
