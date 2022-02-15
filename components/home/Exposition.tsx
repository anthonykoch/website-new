import * as React from 'react'
import styles from './Exposition.module.css'

export const Exposition: React.FC<{
  title: React.ReactNode
  description: React.ReactNode
  cta: React.ReactNode
  href: string
}> = ({ title, description, cta, href }) => {
  return (
    // flex flex-col items-center justify-center
    // <div className="">
    <div>
      <div className="w-full">
        <h3 className="font-display tracking-[4px] text-[28px] font-semibold relative inline-block mb-7">
          {title}
        </h3>
      </div>
      <p className="leading-[38px] w-[534px] font-light pb-10">{description}</p>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <Button>{cta}</Button>
      </a>
    </div>
    // </div>
  )
}

function Button<
  T extends keyof JSX.IntrinsicElements,
  As extends T,
  P extends JSX.IntrinsicElements[T],
>({ children, as: As }: P & { as?: As }) {
  if (As === undefined) {
    // @ts-ignore
    As = 'span'
  }

  return (
    // @ts-ignore
    <As className="w-[242px] h-[52px] bg-[#494949] flex items-center justify-center font-body uppercase font-semibold text-[12px] tracking-widest text-white">
      {children}
    </As>
  )
}

// <span className="absolute -left-5 inline-block bg-yellow1 h-[38px] w-[120%] -z-10 absolute-center"></span>
