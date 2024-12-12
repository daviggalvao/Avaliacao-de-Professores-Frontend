import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/styles/feed.module.css'

const HeaderDeslogado = () => {
  return (
    <div className = "bg-background h-20 w-screen flex items-center justify-between">
          <Image src = "logounb.svg" alt = "Logo UNB" className = "h-8 w-20 ml-4" width={50} height={50}/>
          <Link href = "/login">
            <button className = "bg-foreground p-1 mr-8 flex justify-center items-center w-28 rounded-xl">Login</button>
          </Link>
      </div>
  )
}

export default HeaderDeslogado;