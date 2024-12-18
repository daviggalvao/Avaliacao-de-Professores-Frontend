import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserData } from '../../types/User'; 
import { getToken } from '../../utils/auth'; 


import Image from "next/image";
import logoUnb from '../../assets/logounb.svg';  // Caminho para a imagem local
import defaultFoto from '../../assets/fotodefault.svg';  // Caminho para a imagem local
import loginOut from '../../assets/loginout.svg';  // Caminho para a imagem local

import '../../app/globals.css';
import styles from '../../aa_extra/styles/feed.module.css';

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
    <div className = "w-full h-20 bg-foreground flex items-center justify-between px-4">

      <Image src={logoUnb}  alt="Logo UNB" className="w-20 h-10"/>

      <div className = "flex-1 flex justify-center">
        <input type="text" placeholder="Buscar Professor(a)" className="bg-white-100 w-60 h-8 rounded-lg"></input>
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <div className="Sininho">

            </div>

            <div className="Logout px-4 py-4 w-20">
              <button 
                onClick={() => {
                  localStorage.removeItem('token'); // Remove token
                  localStorage.removeItem('user');  // Remove dados do usuário
                  setIsAuthenticated(false); // Atualiza estado
                  setUser(null); // Remove usuário autenticado
                }}
              >

              <Image src={loginOut}  alt="botão de deslogar" className=""/>
              </button>
            </div>

            <div className=" w-16 h-16 border border-black rounded-full overflow-hidden">
              <Link href={`/users/${User?.id}`}>
                <Image src={
                  User?.foto_perfil && typeof User.foto_perfil === "string"
                  ? User.foto_perfil
                  : defaultFoto
                } alt="Foto de perfil" className = "w-full h-full object-cover"/>
              </Link>
            </div>

          </>
        ) : (
          <>
            <Link href = "/auth/login">
              <button className = "text-white bg-[#00FFFF] px-1 py-1 rounded-md w-28 flex justify-center items-center cursor-pointer text-lg border-2 border-white">Login</button>
            </Link>

            <Link href = "/auth/register">
              <button className = "text-white bg-[#00FFFF] px-1 py-1 rounded-md w-28 flex justify-center items-center cursor-pointer text-lg border-2 border-white">Criar Conta</button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header;
