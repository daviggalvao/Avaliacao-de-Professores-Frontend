'use client';

import Image from "next/image";
import Link from "next/link";
import '../styles/globals.css';
import styles from '../styles/feed.module.css';

export default function Home() {
  return (
  <div>
      <div className = {styles.topo}>
          <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
          alt = "Logo UNB" className = {styles.logo} width={50} height={50}/>

          <Link href = "/feed">
            <button className = " bg-green-500 w-40 border border-black rounded mt-8">voltar</button>
            </Link>

          <Link href = "">
            <button className = {styles.loginbutton}>Login</button>
          </Link>

      </div>

      <div className = "flex justify-center items-center h-screen bg-white">

        <div className = "bg-white w-1/4 h-full border-2 border-green-600">

          <div className = "bg-white-100 w-full h-1/4 border-b-2 border-green-600">

            <Image 
              src="morty.svg"
              alt = "Morty" width={25} height={25} className= "w-32 h-32 border border-black rounded-full ml-16 mt-8"
              />

            <h1 className = "text-xl font-bold ml-16">Nome do aluno</h1>

            <h2 className = "text-xs ml-16">Curso do aluno</h2>

            <h2 className = "text-xs ml-16">Email do aluno</h2>
          </div>

          <div className = "flex-col items-center justify-center">
            <h1 className = "text-xl font-bold ml-4 mt-4" >Publicações</h1>

            <div className = " m-auto mt-10 bg-green-500 rounded-lg w-2/3">
              <h3 className = "text-xs font-bold">Nome do Aluno</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident tenetur deleniti at reiciendis aperiam fugit esse odit impedit! Iusto recusandae vero culpa odit ut quam aliquam modi dolores veritatis.</p>
            </div>

            <div className = " m-auto mt-10 bg-green-500 rounded-lg w-2/3">
              <h3 className = "text-xs font-bold">Nome do Aluno</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident tenetur deleniti at reiciendis aperiam fugit esse odit impedit! Iusto recusandae vero culpa odit ut quam aliquam modi dolores veritatis.</p>
            </div>

            <div className = " m-auto mt-10 bg-green-500 rounded-lg w-2/3">
              <h3 className = "text-xs font-bold">Nome do Aluno</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores provident tenetur deleniti at reiciendis aperiam fugit esse odit impedit! Iusto recusandae vero culpa odit ut quam aliquam modi dolores veritatis.</p>
            </div>

          </div>

        </div>

      
      </div>
    

  </div>

  );
}
