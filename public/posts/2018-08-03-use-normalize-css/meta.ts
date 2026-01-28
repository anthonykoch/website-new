import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = 'Use normalize css'

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 8,
}
