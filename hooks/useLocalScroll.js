import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
// import "locomotive-scroll/src/locomotive-scroll.scss";
// import LocomotiveScroll from "locomotive-scroll"
gsap.registerPlugin(ScrollTrigger)

export default function useLocoScroll(start) {
  useEffect(async () => {
    if (!start) return
    let locoScroll = null
    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update()
      }
    }
    const scrollEl = document.querySelector('[data-scroll-container]')
    import('locomotive-scroll').then((LocomotiveScroll) => {
      locoScroll = new LocomotiveScroll.default({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      })

      locoScroll.on('scroll', () => {
        ScrollTrigger.update()
      })
    })
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
        }
        return null
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x
        }
        return null
      },
    })

    ScrollTrigger.addEventListener('refresh', lsUpdate)
    ScrollTrigger.refresh()
    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate)
        locoScroll.destroy()
        locoScroll = null
        console.log('Kill', locoScroll)
      }
    }
  }, [start])
}
