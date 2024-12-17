import React, { useEffect, useState } from "react";
import Link from "next/link";
import { UserData } from "../../types/User";
import { getToken } from "../../utils/auth";

import Image from "next/image";
import logoUnb from "../../assets/logo_unb.png"; // Caminho para a imagem local

import "../../app/globals.css";
import styles from "../../aa_extra/styles/feed.module.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [User, setUser] = useState<UserData | null>(null); // Dados do usuário autenticado

  useEffect(() => {
    const token = getToken(); // Verifica se existe um token
    if (token) {
      setIsAuthenticated(true);

      // Busca os dados do usuário autenticado do localStorage
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  return (
    <div className="flex justify-between items-center bg-background h-20">
      <Image
        src={logoUnb}
        alt="Logo UNB"
        className = "h-8 w-20 ml-4"
        width={50}
        height={50}
      />

      <div className="profile_content">
        {isAuthenticated ? (
          <>
            <div className="seuPerfil">
              <Link href={`/users/${User?.id}`}>
                <img
                  src={
                    User?.foto_perfil ||
                    "/src/assets/default_profile_picture.png"
                  }
                  alt="Foto de perfil"
                />
              </Link>
            </div>

            <div className="Logout">
              <button
                onClick={() => {
                  localStorage.removeItem("token"); // Remove token
                  localStorage.removeItem("user"); // Remove dados do usuário
                  setIsAuthenticated(false); // Atualiza estado
                  setUser(null); // Remove usuário autenticado
                }}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center">
            <Link href="/auth/login">
              <button className = "bg-foreground p-2 mr-3 text-white font-bold flex justify-center items-center w-28 rounded-xl">Login</button>
            </Link>

            <Link href="/auth/register">
              <button className = "bg-foreground p-2 mr-3 text-white font-bold flex justify-center items-center w-28 rounded-xl">Criar Conta</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
