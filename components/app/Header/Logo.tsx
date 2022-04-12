import * as React from 'react'
import cx from 'classnames'
import { NavText } from './Nav'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cx(
        'flex items-center px-gutter-lg xl:px-0 xl:justify-center h-nav-height w-[220px]',
        className,
      )}
      style={{ transition: 'transform 200ms ease-in' }}
    >
      <LogoText />
    </div>
  )
}

export const LogoText: React.FC = () => (
  <NavText>
    <span className="tracking-[4px]">Anthony Koch</span>
  </NavText>
)
