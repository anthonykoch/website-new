import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = `The tools I use`

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 2,
}
