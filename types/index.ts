export interface Post {
  meta: PostMeta
  content: string
}

export interface PostMetaRaw {
  id: any
  title: string
  createdAt: string
  isPublished?: boolean
  data: any
}

export interface PostMetaBase {
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

export interface PostMeta extends PostMetaBase {
  filename?: never
}

export interface PostMetaWithFile extends PostMetaBase {
  filename: string
}
