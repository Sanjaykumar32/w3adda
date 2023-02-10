import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '/styles/Home.module.scss'
import { HomePage } from './Home/home'
import Header from '../components/header/header'
import { About } from './about/about'
import { Category } from './category/category'
import { Post_page } from './postPage/post_page'
import { SingleCategory } from './singleCategory/singleCategory'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
          <HomePage/>
          {/* <Category/> */}
          {/* <Post_page/> */}
          {/* <SingleCategory/> */}
          {/* <About/> */}
    </>
  )
}
