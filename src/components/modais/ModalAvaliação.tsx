import React, { useEffect, useState } from "react";
import { UserData } from "../../types/User";
import { getToken } from "../../utils/auth";
import "../../app/globals.css";


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
        {isAuthenticated ? (
            <button onClick={() => setOpen(!open)} className = "bg-foreground p-2 mr-3 text-white font-bold flex justify-center items-center rounded-xl">Nova Publicação</button>
        ) : (
            <div className="hidden"></div>
        )}
    </div>
  );
};

export default ModalAvaliação;
