import React, { ReactNode } from 'react'
import cx from 'classnames'

export const SiteContainer: React.FC<{
  className?: string
  children?: ReactNode
}> = ({ children, className }) => {
  return (
    <div className={cx('max-w-[1728px] mx-auto w-full', className)}>
      {children}
    </div>
  )
}
