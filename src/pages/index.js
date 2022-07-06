import Head from 'next/head'
import Image from 'next/image'
import LayoutLoggedIn from '../components/LayoutLoggedIn/LayoutLoggedIn'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <LayoutLoggedIn title="Home">
      Home
    </LayoutLoggedIn>
  )
}
