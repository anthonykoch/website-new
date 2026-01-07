import { useMotionValue, useTransform } from 'motion/react'
import { useEffect } from 'react'

export const useMousePosition = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return { mouseX, mouseY }
}

// export const useMouseProgress = () => {
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)

//   const x = useTransform(
//     mouseX,
//     [0, typeof window === 'undefined' ? 0 : window.innerHeight],
//     [0, 1],
//   )

//   const y = useTransform(
//     mouseY,
//     [0, typeof window === 'undefined' ? 0 : window.innerWidth],
//     [0, 1],
//   )

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX)
//       mouseY.set(e.clientY)
//     }

//     window.addEventListener('mousemove', handleMouseMove)

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [mouseX, mouseY])

//   return { mouseX: x, mouseY: y }
// }
