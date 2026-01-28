import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = `Medium style image loading`

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 5,
}
