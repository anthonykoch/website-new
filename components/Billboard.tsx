import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export const Billboard: FC<{
  children?: ReactNode
  textSize?: 'lg' | 'md'
}> = ({ children, textSize }) => (
  <BillboardGrid>
    {/* <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2 pt-18 xl:pt-36"> */}
    <div
      className={classNames(
        'pt-18 xl:pt-52 font-heading font-500 text-[38px] md:text-[58px]  leading-[1.2] xl:leading-none z-10',
        // 'pt-18 xl:pt-52 font-heading font-600 text-[46px] md:text-[58px]  leading-[1.1] xl:leading-none z-10',
        {
          'xl:text-[100px]': textSize === 'lg',
          'xl:text-[72px]': textSize == null || textSize === 'md',
        },
      )}
    >
      {/* <div className="pt-18 xl:pt-52 font-heading font-500 text-[46px] md:text-[58px] xl:text-[72px] leading-[1.1] xl:leading-none z-10"> */}
      {children}
    </div>
    <div className="pb-20 xl:pb-30" />
  </BillboardGrid>
)

export const BillboardGrid: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-x-4 px-4">
      <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2">
        {children}
      </div>
    </div>
  )
}
