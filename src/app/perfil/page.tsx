"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import HeaderDeslogado from "@/components/HeaderDeslogado";
import HeaderLogado from "@/components/HeaderLogado";
import Coment from "@/components/Coment";
import ModalPerfil from "@/components/ModalPerfil";

export default function Home() {
  return (
    <div>
      <HeaderDeslogado />

      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="bg-white w-1/2 h-full border-2 border-foreground ">
          <div className="bg-white flex w-full h-1/4 border-b-2 border-foreground">
            <div className="flex basis-2/4 flex-col">
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

            <div className="flex basis-3/4 flex-col justify-start items-end mr-4">
              <ModalPerfil></ModalPerfil>
              <button className="bg-foreground p-1 mt-4 flex justify-center items-center w-28 rounded-xl">Excluir</button>
              <Link href="/">
                <button className="bg-foreground p-1 mt-4 flex justify-center items-center w-28 rounded-xl">Sair</button>
              </Link>
            </div>
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


