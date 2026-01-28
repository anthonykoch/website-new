import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = `My favorite features of ES2015`

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 1,
}
