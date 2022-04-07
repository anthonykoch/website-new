import cx from 'classnames'

export const SectionTitle: React.FC<{ className?: string }> = ({ className, children }) => (
  <div
    className={cx(
      className,
      'text-[32px] lg:text-[38px] font-heading font-600',
    )}
  >
    {children}
  </div>
)

export const Title: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div
    className={cx(
      className,
      'text-[42px] xl:text-[48px] font-display font-500 xl:font-600 tracking-[0.085em]',
    )}
  >
    {children}
  </div>
)
