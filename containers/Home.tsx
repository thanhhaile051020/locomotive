import React, { useCallback, useEffect, useRef, useState } from 'react'
import About from '../components/About/About'
import CustomCursor from '../components/CustomCursor'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'
import Gallery from '../components/Gallery/Gallery'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import styles from './index.module.scss'
import useLocalScroll from '../hooks/useLocalScroll'
import { debounce } from 'lodash'
const Home = () => {
  const [preloader, setPreloader] = useState(true)

  useLocalScroll(!preloader)
  const [timer, setTimer] = useState(3)
  const id = useRef<any>(null)

  const debouncePreloader = useCallback(
    debounce(() => {
      setPreloader(false)
    }, 100),
    []
  )
  useEffect(() => {
    debouncePreloader()
  })

  if (typeof window === 'undefined' || !window.document) {
    return null
  }

  return (
    <div data-load-container className="">
      {preloader ? (
        <div
          className="loader-wrapper fixed top-0 right-0 left-0 bottom-0 z-[1] flex
         flex-col items-center justify-center bg-black
        text-[#dbd8d6]
        "
        >
          <h1 className="font-baijam text-[1.5vw] font-[600] uppercase">
            Flirty flowers
          </h1>
          <h2 className="mt-[10px] font-bodoni text-[1.5vw] uppercase italic">
            Rio de Janeiro
          </h2>
        </div>
      ) : (
        <div
          className={`${styles.mainContainer} main-container  overflow-y-scroll scrollbar-hide`}
          id="main-container"
          data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Home
