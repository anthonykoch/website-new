import { PostMeta } from '@/types'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

export const PostList: FC<{
  posts: Array<PostMeta>
  activeId?: string
}> = ({ posts, activeId }) => {
  return (
    <ul>
      {posts.map((listing, i) => (
        <li key={listing.slug}>
          <div
            className={classNames(
              'duration-100 transition-colors select-none hover:shadow-button',
              {
                ['hover:bg-primary-500']: listing.id !== activeId,
                ['bg-[#e6e6e6] hover:bg-[#ebebeb] cursor-default shadow-none!']:
                  listing.id === activeId,
              },
            )}
          >
            <Link
              href={`/blog/${listing.slug}`}
              className={classNames(
                'rounded-xs shadow-none flex items-center text-[#111] transition-all duration-100',
                'group',
                {},
              )}
            >
              <div className="min-w-[140px] lg:min-w-[170px] h-full">
                <time
                  className="px-3 lg:px-4 transition-all duration-200 block "
                  dateTime={listing.createdAt}
                >
                  <span className="block overflow-clip">
                    {/* setup-line-down */}
                    <span className="selector-text will-change-transform text-[12.5px] xl:text-[13px] italic text-[#222] font-heading font-500 leading-[1.3]">
                      {listing.humanized.createdAt}
                    </span>
                  </span>
                </time>
              </div>
              <span
                className={classNames(
                  'py-3 px-3 xl:py-3.5 xl:px-4 transition-all duration-200 group-hover:border-white border-l border-solid border-transparent block w-full',
                  {
                    ['border-white!']: listing.id === activeId,
                  },
                )}
              >
                <span className="block overflow-clip">
                  {/* setup-line-down */}
                  <span className="selector-text will-change-transform font-heading font-600 text-[13px] xl:text-[13px] leading-[1.3]">
                    {listing.title}
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}
