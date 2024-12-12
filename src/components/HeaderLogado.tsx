import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const HeaderLogado = () => {
  return (
    <div className = "bg-background h-20 w-screen flex items-center justify-between">
          <Image src = "logounb.svg" alt = "Logo UNB" className = "h-8 w-20 ml-4" width={50} height={50}/>
          
          <div className="mr-8">
            <Link href = "./perfil">
                <Image src="perfil.svg" alt = "Foto de perfil não cadastrada" className="cursor-pointer rounded-full" width={50} height ={50}/>
            </Link>
          </div>
      </div>
  )
}

export default HeaderLogado;