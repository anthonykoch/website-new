'use client'

import { easeOutExpo } from '@/utils/animation'
import { animate } from 'motion/react'
import { useEffect } from 'react'

export const BlogPageAnimate = () => {
  useEffect(() => {
    let delay = 0.4

    animate(
      '.selector-title',
      { y: ['110%', '0%'], opacity: [0, 1] },
      // { y: [12, 0], opacity: [0, 1] },
      { delay: delay, duration: 1.2, ease: easeOutExpo },
      // { delay: delay, duration: 1, ease: easeOutExpo },
    )

    animate(
      '.selector-lead',
      { y: ['110%', '0%'], opacity: [0, 1] },
      // { y: [12, 0], opacity: [0, 1] },
      { delay: (delay += 0.0), duration: 1.4, ease: easeOutExpo },
      // { delay: (delay += 0.06), duration: 1, ease: easeOutExpo },
    )

    delay = 0.1

    // animate(
    //   '.selector-border',
    //   {
    //     scaleY: [0, 1],
    //   },
    //   {
    //     duration: 1.2,
    //     ease: [0.64, 0, 0.78, 0],
    //     // duration: 2.2,
    //     // ease: [0.33, 1, 0.68, 1],
    //     // duration: 5,
    //     // ease: easeOutExpo,
    //     delay: (delay += 0),
    //   },
    // )

    // animate(
    //   '.selector-text',
    //   {
    //     y: ['110%', '0%'],
    //     // y: [100, 0],
    //   },
    //   {
    //     duration: 1,
    //     // duration: 0.7,
    //     ease: easeOutExpo,
    //     delay: stagger(0.05, { startDelay: (delay += 0.8) }),
    //     // delay: () => {}
    //   },
    // )
    // animate(
    //   '.selector-text',
    //   {
    //     opacity: [12, 0],
    //   },
    //   {
    //     duration: 0.7,
    //     // ease: easeOutExpo,
    //     delay: stagger(0.06, { startDelay: 1, }),
    //     // delay: () => {}
    //   },
    // )
  }, [])

  return <></>
}
