import React from 'react'
import cx from 'classnames'

export const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cx('max-w-[1200px] mx-auto w-full', className)}>
      {/* <div className={cx('max-w-common mx-auto w-full', className)}> */}
      {children}
    </div>
  )
}
