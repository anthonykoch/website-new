import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export const BlogPlacerholder: FC<{
  children?: ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div className={classNames('w-full h-[max(500px,57vh)]', className)}>
      {children}
    </div>
  )
}

export const BlogHero = () => (
  <BlogPlacerholder className="bg-[#2b292b] relative">
    <img
      src="/blog-hero-m.jpg"
      className="md:hidden object-cover object-center size-full absolute"
    />
    <img
      src="/blog-hero-d.jpg"
      className="object-cover lg:object-[90%_0%] xl:object-[90%_35%] 2xl:object-[85%_-200px] size-full absolute opacity-40"
    />
  </BlogPlacerholder>
)
