import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = `Why you shouldn't loop arrays with for-in`

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 4,
}
