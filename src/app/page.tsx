'use client';

import Image from "next/image";
import './styles/globals.css';
import styles from './styles/feed.module.css';
import HeaderDeslogado from "@/components/Header";

export default function Home() {
  return (
  <div>
     <HeaderDeslogado/>

      <div className = {styles.feedbody}>

        <div className = {styles.searchboxjan}>
          <input type="text" placeholder="Buscar Professor(a)" className={styles.searchbox}></input>
        </div>

        <h1 className = {styles.title}>Novos Professores</h1>
        
        <section className = {styles.secaoprof}>
          
          <div className = {styles.moldeprof}>
           <Image src = "logounb.svg"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor1</h2>
            <p>disciplina</p>
          </div>

          <div className = {styles.moldeprof}>    
            <Image src = "logounb.svg"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor2</h2>
            <p>disciplina</p>
          </div>

          <div className = {styles.moldeprof}>    
            <Image src = "logounb.svg"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor3</h2>
            <p>disciplina</p>
          </div>

          <div className = {styles.moldeprof}>
            <Image src = "logounb.svg"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor4</h2>
            <p>disciplina</p>
          </div>
          
        </section>
        
        <div className= "flex justify-between items-center max-w-screen-lg">
          <h1 className = {styles.title}>Todos os Professores</h1>
          <button className = "bg-blue-400 text-white rounded">Nova Publicação</button>
        </div>

        <section className = {styles.secaoprof}>
          <div className = {styles.moldeprof}>
              <Image src = "logounb.svg"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor1</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>    
              <Image src = "logounb.svg"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor2</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>    
              <Image src = "logounb.svg"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor3</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>
              <Image src = "logounb.svg"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor4</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>
              <Image src = "logounb.svg"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor5</h2>
              <p>disciplina</p>
            </div>
          
        </section>  

      </div>

  </div>

  );
}
