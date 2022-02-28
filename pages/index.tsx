import Head from 'next/head'
import { useState } from 'react'
import About from '../components/About/About'
import CustomCursor from '../components/CustomCursor'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'
import Gallery from '../components/Gallery/Gallery'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Home from '../containers/Home'
import styles from './index.module.scss'
export default function Main() {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="fixed h-screen w-[100%] overflow-y-scroll scrollbar-hide bg-bg-color">
        <CustomCursor />
        <Home />
      </main>

      <footer className=""></footer>
    </div>
  )
}
