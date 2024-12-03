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
          <Link href = "">
            <button className = {styles.loginbutton}>Login</button>
          </Link>
      </div>

      <button className = " bg-green-500 w-20 rounded absolute ml-80 mt-8">voltar</button>

      <div className = "flex justify-center items-center h-screen bg-white">

        <div className = "bg-white w-1/4 h-full border-2 border-green-600">

          <div className = "bg-white-100 w-full h-1/4 border-b-2 border-green-600">

            <Image 
              src="https://static.wikia.nocookie.net/multiversus/images/6/6c/Morty_Profile_Icon.png/revision/latest?cb=20221015092937"
              alt = "Morty" width={50} height={50} className= "w-32 h-32 rounded-full ml-16 mt-8"
              />

            <h1 className = "text-xl font-bold ml-16">Nome do aluno</h1>

            <h2 className = "text-xs ml-16">Curso do aluno</h2>

            <h2 className = "text-xs ml-16">Email do aluno</h2>
          </div>
          <div>
            <h1 className = "text-xl font-bold ml-4 mt-4" >Publicações</h1>
          </div>

        </div>

      
      </div>
    

  </div>

  );
}
