import React, { useEffect } from 'react'
import gsap from 'gsap'
import SplitText from '../utils/Split3.min.js'
import styles from './Header.module.scss'
const Header = () => {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: 'lines',
      linesClass: 'lineChildren translate-x-0 translate-y-[500px]',
    })

    const splitParent= new SplitText("#header-text", {
      type: 'lines',
      linesClass: 'lineParent overflow-hidden',
    })

    

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
      
    })
  }, [])

  return (
    <section data-scroll-section className={`relative mt-[50px] `}>
      <ul
        className="absolute left-0 top-[100px] font-syncopate 
      font-[600] uppercase tracking-[1px] text-[#626262]"
      >
        <li className="m-[10px_0]">Intro</li>
        <li className="m-[10px_0]">About</li>
        <li className="m-[10px_0]">Feature</li>
      </ul>
      <h1
        className={`text-center font-baijam text-[20vw] font-[600] uppercase`}
        id="header-text"
      >
        Art Objects
      </h1>
    </section>
  )
}

export default Header
