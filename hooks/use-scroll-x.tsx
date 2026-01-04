import {
  MotionValue,
  resize,
  transform,
  useMotionValueEvent,
} from 'motion/react'
import { RefObject, useEffect, useRef } from 'react'

export const useScrollX = ({
  container,
  scrollYProgress,
}: {
  container: RefObject<HTMLElement | null>
  scrollYProgress: MotionValue<number>
}) => {
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!container.current) return

    // console.log(scrollableWidth.current)
    // console.log(scrollableTransform.current, container.current)

    if (scrollableTransform.current) {
      // console.log('UPDATE', progress)
      const left = scrollableTransform.current(progress)
      container.current.scrollLeft = left
    }
  })

  const scrollableWidth = useRef(0)
  const scrollableTransform = useRef<(input: number) => number>(null)

  const updateScrollableWidth = () => {
    if (!container.current) return
    const el = container.current

    scrollableWidth.current = el.scrollWidth - el.clientWidth
    scrollableTransform.current = transform(
      [0, 1],
      [0, scrollableWidth.current],
    )

    // console.log('width', scrollableWidth.current, el)
  }

  useEffect(() => {
    console.log('initial', container.current)
    updateScrollableWidth()

    const stop = resize(() => updateScrollableWidth())

    return () => {
      stop()
    }
  }, [])
}
