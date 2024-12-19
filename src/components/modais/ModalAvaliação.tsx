import React, { useEffect, useState } from "react";
import { UserData } from "../../types/User";
import { getToken } from "../../utils/auth";
import "../../app/globals.css";
import Link from "next/link";


const ModalAvaliação = () => {
  const [open, setOpen] = useState(false);
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
    <div>
      <button onClick={() => setOpen(!open)} className = "bg-foreground p-2 mr-3 text-white font-bold flex justify-center items-center rounded-xl">Nova Publicação</button>
      {open? (
        <div className="h-full w-full bg-black/40 fixed top-0 left-0">
          <br />
          <br />
            <div className="flex flex-col items-center h-5/6 w-10/12 gap-2 bg-foreground p-8 rounded-xl relative m-auto">
                <form className="flex flex-col w-full justify-center items-center">
                  <select name="professor" id="professor" className="p-2 w-3/4 mb-2 rounded-lg">
                    <option value="" disabled selected>Nome do Professor</option>
                  </select>
                  <select name="disciplina" id="disciplina" className="p-2 w-3/4 rounded-lg">
                    <option value="Disciplina" className="" disabled selected>Disciplina</option>
                  </select>
                </form>
              <div className="bg-foreground flex flex-col items-center justify-center rounded-md h-4/5 w-11/12">
                <div className="flex-1 border-black outline-none h-full w-full text-start flex text-wrap rounded-3xl">
                  <textarea className="outline-none bg-white resize-none w-full" id="avaliacao"/>
                </div>
                <br />
              </div>
              <div className="flex">
                <button className="text-white bg-[#00FFFF] mr-2 px-1 py-1 rounded-xl w-28 flex justify-center items-center cursor-pointer text-lg border-2 border-white">Avaliar</button>
                <div className="ml-56">
                  <button onClick={() => setOpen(!open)} className="text-white bg-[#00FFFF] mr-2 px-1 py-1 rounded-xl w-28 flex justify-center items-center cursor-pointer text-lg border-2 border-white">Sair</button>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default ModalAvaliação;
