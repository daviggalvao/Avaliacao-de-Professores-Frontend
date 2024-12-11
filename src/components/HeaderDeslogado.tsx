import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles/feed.module.css'

const HeaderDeslogado = () => {
  return (
    <div className = {styles.topo}>
          <Image src = "logounb.svg"
          alt = "Logo UNB" className = {styles.logo} width={50} height={50}/>
          <Link href = "/login">
            <button className = {styles.loginbutton}>Login</button>
          </Link>
      </div>
  )
}

export default HeaderDeslogado;