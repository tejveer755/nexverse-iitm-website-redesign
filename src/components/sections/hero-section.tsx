"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import Aurora from "../Aurora"

// Local parallax helper: uses rAF for smooth updates and respects reduced motion
function useParallax(multiplier = 0.15) {
  const [y, setY] = useState(0)
  const frame = useRef<number | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return

    const onScroll = () => {
      if (frame.current) return
      frame.current = window.requestAnimationFrame(() => {
        setY(window.scrollY || 0)
        frame.current = null
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current)
      window.removeEventListener("scroll", onScroll)
    }
  }, [reduce])

  const offset = reduce ? 0 : Math.max(-60, Math.min(60, y * multiplier))
  return offset
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 480 480" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M371.3 294.4 480 240l-108.7-54.4 38.4-115.3-115.3 38.4L240 0l-54.4 108.7L70.3 70.3l38.4 115.3L0 240l108.7 54.4-38.4 115.3 115.3-38.4L240 480l54.4-108.7 115.3 38.4-38.4-115.3z"
        fill="currentColor"
      />
    </svg>
  )
}

const Background = () => {
  return (
      <div className="absolute bg-black inset-0 z-[-2] min-w-screen ">
        <Aurora
        colorStops={["#96e0ff", "#72c1e9", "#72c1e9"]}
        blend={0.5}
        amplitude={0.6}
        speed={0.6}
        />
          {/* <svg
              width="100%"
              viewBox="0 0 1400 10000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <g clipPath="url(#clip0_243_2)">
                  <rect width="1512" height="16397" fill="#0c0c0c" />
                  <g opacity="0.4" filter="url(#filter0_f_243_2)">
                      <path
                          d="M387.38 137.553C355.297 -107.774 513.625 -371.892 752.935 -403.188C992.246 -434.485 1087.35 -273.117 1119.44 -27.7906C1151.52 217.536 993.208 -36.6224 796.88 -10.947C557.569 20.3495 419.463 382.88 387.38 137.553Z"
                          fill="#30bfdc"
                      />
                  </g>
                  <g filter="url(#filter1_f_243_2)">
                      <circle cx="15" cy="3176" r="185" fill="#30bfdc" />
                  </g>
                  <g filter="url(#filter2_f_243_2)">
                      <circle cx="1275" cy="840" r="64" fill="#30bfdc" />
                  </g>
              </g>
              <defs>
                  <filter id="filter0_f_243_2" x="239.258" y="-551.062" width="1028.33" height="917.31" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_243_2" />
                  </filter>
                  <filter id="filter1_f_243_2" x="-774" y="2387" width="1578" height="1578" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="302" result="effect1_foregroundBlur_243_2" />
                  </filter>
                  <filter id="filter2_f_243_2" x="967" y="532" width="616" height="616" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="122" result="effect1_foregroundBlur_243_2" />
                  </filter>
                  <clipPath id="clip0_243_2">
                      <rect width="1512" height="6397" fill="white" />
                  </clipPath>
              </defs>
          </svg> */}
      </div>
  )
}

export default function HeroSection() {
  const logoOffset = useParallax(0.12)
  const titleOffset = useParallax(0.06)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-b-[60px]  ">

      <Background/>

      <div className="relative mx-auto max-w-7xl flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10 md:gap-12 lg:gap-16 ">
          {/* Text Section */}
          <motion.div
            className="w-full px-4 sm:px-6 md:px-8 lg:w-7/12"
            style={{ translateY: titleOffset }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <h1 className="text-balance font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight uppercase">
              {/* Line 1 */}
              <span className="block text-center sm:text-left text-5xl lg:text-6xl text-white">
                A community of
              </span>

              {/* Line 2: 'innovators' with star */}
              <span className="mt-2 block text-center sm:text-right  text-white">
                <span className="inline-flex items-center justify-center sm:justify-end gap-3 md:gap-4">
                  <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center text-white">
                    <StarIcon className="h-full w-full" />
                  </span>
                  <span className="text-white">innovators</span>
                </span>
              </span>

              {/* Line 3: '& creators' */}
              <span className="mt-2 block text-center sm:text-left  text-white">
                &amp; <span className="text-white">creators</span>
              </span>
            </h1>

            <p className="mt-6 mx-auto sm:mx-0 max-w-xl sm:max-w-2xl text-pretty text-sm sm:text-base md:text-lg text-white text-center sm:text-left">
              Build, learn, and ship together. Explore ideas, share knowledge, and collaborate with peers pushing the
              boundaries of what’s possible.
            </p>
          </motion.div>


          {/* Logo Section */}
          <motion.div
            className="w-full lg:w-5/12 flex items-center lg:border-r border-0 justify-center"
            style={{ translateY: logoOffset }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo1-1759402940398.png"
              alt="Nexverse logo"
              className="relative z-10 h-auto w-[380px] sm:w-[300px] md:w-[360px] lg:w-[360px] xl:w-[400px]"
              loading="eager"
              decoding="async"
              crossOrigin="anonymous"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
