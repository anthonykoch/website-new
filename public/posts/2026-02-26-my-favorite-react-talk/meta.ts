import { PostMetaRaw } from '@/types'

export default async (): Promise<PostMetaRaw> => {
  const title = `My favorite react talk`
  return {
    title: title,
    createdAt: '2026-02-26T00:00:00.000Z',
    id: 15,
    isPublished: false,
    data: {},
  }
}
