import classNames from 'classnames'
import { FC } from 'react'
import styles from './PostList.module.css'

export type Post = {
  id: string
  created_at: string
  humanized: {
    created_at: string
  }
  title: string
  slug: string
}

console.log(styles)

export const PostList: FC<{
  posts: Array<Post>
  activeId?: string
}> = ({ posts, activeId }) => {
  return (
    <ul className={styles.PostList}>
      {posts.map((listing) => (
        <li
          key={listing.slug}
          className={classNames({
            ['is-active']: listing.id === activeId,
          })}
        >
          <a
            href={`/blog/${listing.slug}`}
            className="PostsList-link"
            onClick={(e) => {
              activeId === listing.id && e.preventDefault()
            }}
          >
            <time dateTime={listing.created_at}>
              {listing.humanized.created_at}
            </time>
            <span>{listing.title}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
