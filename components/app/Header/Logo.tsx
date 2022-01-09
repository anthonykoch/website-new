import * as React from 'react'
import cx from 'classnames'
import styles from './Logo.module.css'
import { NavText } from './Nav'

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cx(styles.Logo, className)}>
      <LogoText />
    </div>
  )
}

export const LogoText: React.FC = () => (
  <NavText>
    <span className={styles.LogoText}>Anthony Koch</span>
  </NavText>
)
