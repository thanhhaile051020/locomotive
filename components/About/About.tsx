import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import gsap from 'gsap'
import SplitText from '../utils/Split3.min.js'
import Styles from './About.module.scss'
import useOnScreen from '../../hooks/useOnScreen'
const About = () => {
  const refAbout = useRef<any>()
  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(refAbout)
  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])
  useEffect(() => {
    if (!reveal) return
    const split = new SplitText('#headline', {
      type: 'lines',
      // linesClass: 'lineChildren translate-x-0 translate-y-[500px]',
    })

    gsap.to(split.lines, {
      duration: 1,
      y: -20,
      opacity: 1,
      stagger: 0.1,
      ease: 'power4.out',
    })
  }, [reveal])
  return (
    <section data-scroll-section >
      <SectionHeader title="about" />
      <p
        ref={refAbout}
        id="headline"
        className={`mt-10 text-[70px] leading-[1.12] ${
          Styles.reveal
        } ${reveal ? 'opacity-[1]' : ' opacity-0'}`}
      >
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p> 
    </section>
  )
}

export default About
