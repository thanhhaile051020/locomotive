import React, { useEffect, useRef, useState } from 'react'
import photos from '../../componentsss/data'


import styles from './Featured.module.scss'
const Featured = () => {
  const [firstUrl, secondUrl] = photos

  return (
    <section
      data-scroll-section
      className={`grid grid-cols-[1fr_3fr] items-center ${styles.featuredSection}`}
    >
      <div className="grid grid-rows-[repeat(2,auto)] gap-[10px]">
        <h6>green</h6>
        <img
          data-scroll
          data-scroll-class="is-reveal"
          className={`w-[100%] object-cover `}
          src={firstUrl}
          alt=""
        />
      </div>

      <div className="grid grid-cols-[100px_auto]  items-end gap-[10px]">
        <h6
          className="origin-bottom-left  
        translate-x-[100%]
        -rotate-90
        justify-self-end
        "
        >
          lily
        </h6>

        <img
          data-scroll
          data-scroll-class="is-reveal"
          className={`h-[125vh] w-[100%] object-cover`}
          src={secondUrl}
          alt=""
        />
      </div>
    </section>
  )
}

export default Featured
