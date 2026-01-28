export interface Post {
  meta: PostMeta
  content: string
}

export interface PostMetaRaw {
  id: any
  title: string
  slug: string
  createdAt: string
  isPublished?: boolean
  data: any
}

export interface PostMeta {
  id: any
  title: string
  createdAt: string
  isPublished?: boolean
  slug: string
  data: any
  humanized: {
    createdAt: string
  }
}

