import Head from 'next/head'
import Image from 'next/image'
import First from '../component/Firstpart'
import Navbar from '../component/navbar'
import styles from '../styles/Home.module.css'
import Second from '../component/second'
import Last from '../component/last'

export default function Home() {
  return (
    <div>
      <div className="bag">
        <First />
      </div>
      <div>
        <Second />
      </div>
      <div className="bag2">
         <Last />
      </div>
    </div>
  )
}
