import { FC, ReactNode, Ref } from 'react'

export const MobileImageScroller: FC<{
  containerRef: Ref<HTMLDivElement>
  images: ReactNode[]
}> = ({ containerRef, images }) => {
  return (
    <div
      className="flex items-end gap-x-4 overflow-hidden  flex-nowrap"
      ref={containerRef}
    >
      {images.filter(Boolean).map((image, i) => {
        return (
          <div key={i} className="relative shrink-0">
            {image}
          </div>
        )
      })}
    </div>
  )
}

export const FigCaption: FC<{
  title?: ReactNode
  description?: ReactNode
}> = ({ title, description }) => {
  return (
    <div>
      <div className="px-4">
        <p className="font-bold text-[14px] uppercase tracking-[1.4px] pb-[12px]">
          {title}
        </p>

        <p className="text-[15px] xl:text-[24px] leading-[28px] font-body text-black/60 font-500 pb-[26px]">
          {description}
        </p>
      </div>
    </div>
  )
}
