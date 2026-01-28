import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = 'OR operator gotcha'

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 9,
}
