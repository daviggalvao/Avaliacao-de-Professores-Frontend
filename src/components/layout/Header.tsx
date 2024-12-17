import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { UserData } from '../../types/User'; 
import { getToken } from '../../utils/auth'; 

import Image from "next/image";
import logoUnb from '../../assets/logo_unb.png';  // Caminho para a imagem local
import defaultFoto from '../../assets/default_profile_picture.png';  // Caminho para a imagem local

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

      <div className = "m-auto">
        <input type="text" placeholder="Buscar Professor(a)" className="bg-white-100 w-60 h-8 rounded"></input>
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <div className="Sininho">

            </div>

            <div className="Logout mr-8">
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
              <button className = "text-base bg-blue px-2 py-2 rounded-md w-28 flex justify-center items-center cursor-pointer">Login</button>
            </Link>

            <Link href = "/auth/register">
              <button className = "text-base bg-blue px-2 py-2 rounded-md w-28 flex justify-center items-center cursor-pointer">Criar Conta</button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Header;
