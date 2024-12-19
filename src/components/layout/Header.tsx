import React from "react";
import Link from "next/link";
import { UserData } from "../../types/User";

import { getStorageUser, IsAuthenticated, handleLogout } from "../../utils/auth";

import Image from "next/image";

import logoUnb from "../../assets/logounb.svg"; // Caminho para a imagem local
import defaultFoto from "../../assets/fotodefault.svg"; // Caminho para a imagem local
import loginOut from "../../assets/loginout.svg"; // Caminho para a imagem local

import "../../app/globals.css";

const Header = () => {
  const User = getStorageUser();
  const isUserLoggedIn = IsAuthenticated();

  return (
    <div className="w-full h-20 bg-foreground flex items-center justify-between px-4">
      <Image src={logoUnb} alt="Logo UNB" className="w-20 h-10" />

      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Buscar Professor(a)"
          className="bg-white-100 w-60 h-8 rounded-lg"
        />
      </div>

      <div className="flex items-center gap-4">
        {isUserLoggedIn ? (
          <>
            <div className="Sininho">

            </div>

            <div className="Logout px-4 py-4 w-20">
              <button onClick={handleLogout}>
                <Image src={loginOut} alt="botão de deslogar" className="" />
              </button>
            </div>

            <div className="w-16 h-16 border border-black rounded-full overflow-hidden">
              <Link href={`/users/${User?.id}`}>
                <Image
                  src={
                    User?.foto_perfil && typeof User.foto_perfil === "string"
                      ? User.foto_perfil
                      : defaultFoto
                  }
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <button className="text-white bg-[#00FFFF] px-1 py-1 rounded-md w-28 flex justify-center items-center cursor-pointer text-lg border-2 border-white">
                Login
              </button>
            </Link>

            <Link href="/auth/register">
              <button className="text-white bg-[#00FFFF] px-1 py-1 rounded-md w-28 flex justify-center items-center cursor-pointer text-lg border-2 border-white">
                Criar Conta
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
