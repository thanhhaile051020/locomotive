import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './Gallery.module.scss'
import useOnScreen from '../../hooks/useOnScreen'
const images = [
  {
    src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
    title: 'Dracaena Trifasciata',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
  {
    src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100',
    title: 'Cereus Penuvianus',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
  {
    src: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100',
    title: 'Calliope',
    subtitle: 'Live the Beauty',
    category: 'Shooting / Adv.Campaing',
  },
  {
    src: 'https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100',
    title: 'Golden Pothos',
    subtitle: 'Living Room',
    category: 'Shooting / Adv.Campaing',
  },
]

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}: any) {
  const ref = useRef<any>(null)
  const onScreen = useOnScreen(ref, 0.5)
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index)
    }
  }, [onScreen, index])
  return (
    <div
      ref={ref}
      className={`gallery-item-wrapper grid aspect-[16/9] h-[100%] 
      w-screen grid-cols-[20vw_1fr_200px]`}
    >
      <div />
      <div className="item relative h-[100%] w-[100%] will-change-transform">
        <div
          className="item-info absolute bottom-[10%] z-[1] 
        -translate-x-[20%] text-[#dbd8d6] "
        >
          <h1 className="item-title  font-baijam text-[6vw] font-[600] leading-[6vw] text-white">
            {title}
          </h1>
          <h6
            className={`item-subtitle relative font-bodoni text-[6vw] font-[400] 
          leading-[6vw] text-transparent ${styles.galleryItemSubtitle}`}
          >
            {subtitle}
          </h6>
          <p className="item-category relative mt-[24h] font-baijam text-[24px] font-[400] leading-[24px] text-white">
            {category}
          </p>
        </div>
        <div
          className={`h-[100%] w-[100%] origin-center scale-[1] bg-cover
          bg-center transition-all duration-[1.5s]
          ease-[0.77,0,0.175,1]  ${
            onScreen
              ? 'scale-[1] filter-none'
              : 'scale-[0.7] brightness-[80%] grayscale-[100%] sepia-[20%] '
          }`}
          style={{ backgroundImage: `url("${src}")` }}
        ></div>
      </div>
      <div />
    </div>
  )
}

const Gallery = ({ src }: any) => {
  const [activeImg, setActiveImg] = useState(1)

  const ref = useRef<any>(null)

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth)
      console.log(ref.current.clientWidth)
      console.log({ current: ref.current })
      let sections = gsap.utils.toArray('.gallery-item-wrapper')

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      })
      ScrollTrigger.refresh()
    })
  }, [])

  const handleUpdateActiveImage = (index: any) => {
    setActiveImg(index + 1)
  }

  return (
    <section data-scroll-section className="relative mx-[-5vw] bg-[#d53f41]">
      <div
        ref={ref}
        className="gallery relative flex h-[80vh] w-[400%] flex-nowrap p-[10vh_0]"
      >
        <div
          className="gallery-counter absolute top-[10%] left-[100px] z-[1] inline-block 
        font-baijam text-[16px] font-[600] leading-[16px] text-[#dbd8d6] mix-blend-difference"
        >
          <span>{activeImg}</span>
          <span
            className="divider m-[7px_10px] inline-block h-[1px] w-[6.25vw] 
          bg-white content-['']"
          ></span>
          <span>{images.length}</span>
        </div>
        {images.map((img, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...img}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
