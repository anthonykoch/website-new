import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = `Understanding JavaScript Prototypes`

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 6,
}
