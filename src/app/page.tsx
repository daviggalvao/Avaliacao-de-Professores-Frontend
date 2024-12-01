'use client';

import Image from "next/image";
import Link from "next/link";
import './styles/globals.css';
import styles from './styles/feed.module.css';

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

      <div className = {styles.feedbody}>

        <div className = {styles.searchboxjan}>
          <input type="text" placeholder="Buscar Professor(a)" className={styles.searchbox}></input>
        </div>

        <h1 className = {styles.title}>Novos Professores</h1>
        
        <section className = {styles.secaoprof}>
          
          <div className = {styles.moldeprof}>
            <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor1</h2>
            <p>disciplina</p>
          </div>

          <div className = {styles.moldeprof}>    
            <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor2</h2>
            <p>disciplina</p>
          </div>

          <div className = {styles.moldeprof}>    
            <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor3</h2>
            <p>disciplina</p>
          </div>

          <div className = {styles.moldeprof}>
            <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
            alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
            <h2>professor4</h2>
            <p>disciplina</p>
          </div>
          
        </section>
        
        <h1 className = {styles.title}>Todos os Professores</h1>

        <section className = {styles.secaoprof}>
          <div className = {styles.moldeprof}>
              <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor1</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>    
              <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor2</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>    
              <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor3</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>
              <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor4</h2>
              <p>disciplina</p>
            </div>

            <div className = {styles.moldeprof}>
              <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
              alt = "Imagem prof" className = {styles.imagemprof} width={50} height={50}/>
              <h2>professor5</h2>
              <p>disciplina</p>
            </div>
          
        </section>  

      </div>

  </div>

  );
}
