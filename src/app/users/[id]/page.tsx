"use client"

import Image from "next/image";
import Link from "next/link";
import styles from '../aa_extra/styles/feed.module.css';
import defaultFoto from '../../../assets/fotodefault.svg';  // Caminho para a imagem local

import { hookUser } from '@/hooks/hookUser'; 
import Header from '@/components/layout/Header';
import Avaliacao from '@/components/entidades/Avaliacao'

export default function PerfilAluno() {
    const user = hookUser();
    
    if (!user) {
        return <p>Carregando...</p>; // Exibe algo enquanto os dados de User estão sendo carregados
    }
    else {
        return (
            <div className = "">
                <Header/>

                <div className = "flex justify-center items-center flex-1 bg-white">

                    <div className = "bg-green-200 w-1/4 border-2 border-green-600 flex flex-col min-h-screen rounded-xl">

                        <div className = "flex flex-col items-center justify-center bg-white-100 w-full h-1/4 border-b-2 border-green-600">

                            <Image src={
                                user?.foto_perfil && typeof user.foto_perfil === "string"
                                ? user.foto_perfil
                                : defaultFoto
                                } alt="Foto do Usuário" 
                                className= "w-32 h-32 border border-black rounded-full mt-4 mb-2" width={50} height={50}/>

                            <h1 className = "text-xl font-bold mb-1">{user.nome}</h1>

                            <h2 className = "text-xs mb-1">{user.curso}</h2>

                            <h2 className = "text-xs mb-2">{user.email}</h2>
                        </div>

                        <div className = "flex flex-col flex-1 items-center">
                            <h1 className = "text-xl font-bold ml-4 mt-4" >Publicações</h1>

                            {user.Avaliacoes?.map((avaliacao) => (
                                <Avaliacao key={avaliacao.id} {...avaliacao} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
