import React from 'react'
import cx from 'classnames'

export const Container: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cx('max-w-[1190px] mx-auto w-full', className)}>
      {/* <div className={cx('max-w-common mx-auto w-full', className)}> */}
      {children}
    </div>
  )
}

export const OuterContainer: React.FC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cx('max-w-[1250px] mx-auto w-full', className)}>
      {/* <div className={cx('max-w-common mx-auto w-full', className)}> */}
      {children}
    </div>
  )
}
