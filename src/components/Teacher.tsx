import React from 'react'
import Image from 'next/image'

type Props = {
    teacher: string;
}

const Teacher = ({ teacher }: Props) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-lg p-2 h-48 w-40">
        <Image src="perfil.svg" alt = "Foto de perfil não cadastrada" className="h-24 w-24 cursor-pointer rounded-lg" width={50} height ={50}/>
        <h1 className="mt-2">Nome</h1>
        <h2>Disciplina</h2>
    </div>
  )
}

export default Teacher