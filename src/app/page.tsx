"use client";

import Image from "next/image";
import "./styles/globals.css";
import HeaderDeslogado from "@/components/HeaderDeslogado";
import HeaderLogado from "@/components/HeaderLogado";
import Teacher from "@/components/Teacher";
import Sort from "@/components/Sort";

export default function Home() {
  return (
    <div>
      <HeaderDeslogado />

      <div className="bg-sky-50 h-screen">
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="bg-white border-black w-1/2 roundend-2xl p-2 mt-6 cursor-text"
            placeholder="Buscar Professor(a)"
          ></input>
        </div>

        <h1 className="my-8 ml-80 text-3xl">Novos Professores</h1>

        <section className="bg-sky-50 grid justify-center items-center mx-80 gap-8 grid-cols-4">
          <Teacher></Teacher>

          <Teacher></Teacher>

          <Teacher></Teacher>

          <Teacher></Teacher>
        </section>

        <div className="flex justify-between items-center max-w-screen-lg">
          <h1 className="my-8 ml-80 text-3xl">Todos os Professores</h1>
        </div>

        <section className="bg-sky-50 grid justify-center items-center mx-80 gap-8 grid-cols-4">
          <Teacher></Teacher>

          <Teacher></Teacher>

          <Teacher></Teacher>

          <Teacher></Teacher>
        </section>
      </div>
    </div>
  );
}
