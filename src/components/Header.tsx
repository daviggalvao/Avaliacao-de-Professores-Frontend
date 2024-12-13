import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserData } from '../types/User'; 
import { getToken } from '../utils/auth'; 
import Image from "next/image";

import '../_modais/styles/globals.css';
import styles from '../styles/feed.module.css';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [User, setUser] = useState<UserData | null>(null); // Dados do usuário autenticado

  useEffect(() => {
    const token = getToken(); // Verifica se existe um token
    if (token) {
      setIsAuthenticated(true);

      // Busca os dados do usuário autenticado do localStorage
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  return (
    <div className = {styles.topo}>

      <Image src = "https://upload.wikimedia.org/wikipedia/commons/1/1c/S%C3%ADmbolo_da_UnB_%28para_fundo_branco%29.png"
      alt = "Logo UNB" className = {styles.logo} width={50} height={50}/>

      <div className = {styles.searchboxjan}>
        <input type="text" placeholder="Buscar Professor(a)" className={styles.searchbox}></input>
      </div>

      <div className="profile_content">
        {isAuthenticated ? (
          <>
            <div className="Sininho">

            </div>

            <div className="fotoPerfil">
              <Link href={`/users/${User?.id}`}>
                <img src={User?.foto_perfil || 'src/assets/default_profile_picture.png'} alt="Foto de perfil"/>
              </Link>
            </div>

            <div className="Logout">
              <button 
                onClick={() => {
                  localStorage.removeItem('token'); // Remove token
                  localStorage.removeItem('user');  // Remove dados do usuário
                  setIsAuthenticated(false); // Atualiza estado
                  setUser(null); // Remove usuário autenticado
                }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link href = "/login">
              <button className = {styles.loginbutton}>Login</button>
            </Link>

            <Link href = "/sign-in">
              <button className = {styles.loginbutton}>Criar Conta</button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header;
