export interface Post {
  meta: any
  content: string
}

export interface PostMetaRaw {
  author: string
  tags: string[]
  id: any
  title: string
  created_at: string
  published_at: string
  slug: string
}

export interface PostMeta extends PostMetaRaw {
  humanized: {
    created_at: string
  }
}
