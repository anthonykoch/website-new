import React from 'react'
import cx from 'classnames'

export const ViewWebsiteButton: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        'bg-[#494949] text-center cursor-pointer inline-flex justify-center items-center font-600 font-heading text-white/90 uppercase tracking-widest text-[12px] h-[58px] w-[235px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
