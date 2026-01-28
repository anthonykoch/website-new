import { getPostDate } from '@/utils/post'
import slugify from 'slugify'

const title = `Remember directories in Con Emu`

export default {
  title: title,
  slug: slugify(title),
  createdAt: getPostDate(__filename),
  id: 3,
}
