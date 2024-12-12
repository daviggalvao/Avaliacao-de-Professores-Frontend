"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "../styles/globals.css";
import HeaderDeslogado from "@/components/HeaderDeslogado";
import Coment from "@/components/Coment";

export default function Home() {
  return (
    <div>
      <HeaderDeslogado />

      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <Link href="/">
          <button className="absolute bg-foreground p-1 mt-4 ml-52 flex justify-center items-center w-28 rounded-xl">Sair</button>
        </Link>

        <div className="bg-white w-1/2 h-full border-2 border-foreground ">
          <div className="bg-white-100 w-full h-1/4 border-b-2 border-foreground">
            <Image
              src="perfil.svg"
              alt="Foto de Perfil"
              width={25}
              height={25}
              className="w-32 h-32 border border-background rounded-full ml-16 mt-8"
            />

            <h1 className="text-xl font-bold mt-2 ml-16">Nome do aluno</h1>

            <h2 className="text-xs ml-16">Ciência da Computação</h2>

            <h2 className="text-xs ml-16">aluno123@gmail.com</h2>
            <br />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold">Publicações</h1>

            <Coment name={"Nome"}></Coment>
            <Coment name={"Nome"}></Coment>
            <Coment name={"Nome"}></Coment>
          </div>
        </div>
      </div>
    </div>
  );
}
