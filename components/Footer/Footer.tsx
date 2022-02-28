import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import gasp from 'gsap'
// @ts-ignore
import SplitText from '../utils/Split3.min.js'

import useOnScreen from '../../hooks/useOnScreen'
const Footer = () => {
  const ref = useRef<any>()
  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)
  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])
  useEffect(() => {
    if (!reveal) return
    const split = new SplitText('#location-text', {
      type: 'lines',
      // linesClass: 'lineChildren translate-x-0 translate-y-[500px]',
    })
    const splitParent = new SplitText('#location-text', {
      type: 'lines',
      linesClass: 'lineParent overflow-hidden',
    })

    gasp.fromTo(
      split.lines,
      { y: 200 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2',
      }
    )
  }, [reveal])

  return (
    <section data-scroll-section className="footer pb-[200px] text-center">
      <SectionHeader title="Made in" />
      <h1
        ref={ref}
        className={`font-bodoni text-[18vw] uppercase ${
          reveal ? 'opacity-[1]' : 'opacity-0'
        }`}
        id="location-text"
      >
        Rio de Janeiro
      </h1>
    </section>
  )
}

export default Footer
