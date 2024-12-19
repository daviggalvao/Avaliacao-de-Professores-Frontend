"use client"

import Image from "next/image";
import Link from "next/link";

import defaultFoto from '../../../assets/fotodefault.svg';  // Caminho para a imagem local
import emailUser from '../../../assets/email.svg';
import courseUser from '../../../assets/courseuser.svg';

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

                    <div className = "bg-[#71FDC5] w-1/4 border-2 border-green-400 flex flex-col min-h-screen rounded-xl">

                        <div className = "flex flex-col justify-center bg-white-100 w-full h-1/4 border-b-2 border-green-600">

                            <div className = "ml-10">

                                <div className = "flex items-center justify-between w-full">
                                    <Image src={
                                        user?.foto_perfil && typeof user.foto_perfil === "string"
                                        ? user.foto_perfil
                                        : defaultFoto
                                        } alt="Foto do Usuário" 
                                        className= "w-32 h-32 border-4 border-black rounded-full mt-4 mb-2" width={50} height={50}/>
                                    <div className = "flex flex-col mr-10">
                                        <button className = "text-black bg-[#FF8C9A] px-1 py-1 rounded-2xl w-30 h-8 flex justify-center items-center cursor-pointer text-lg border-2 border-black mb-1">Editar perfil</button>
                                        <button className = "text-black bg-green-400 px-1 py-1 rounded-2xl w-30 h-8 flex justify-center items-center cursor-pointer text-lg border-2 border-black">Excluir perfil</button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className = "text-xl font-bold mb-1">{user.nome}</h1>
                                </div>

                                <div className = "flex items-center gap-1">
                                    <Image src = {courseUser} alt = "icone curso" className = ""  width={25} height={25}/>
                                    <h2 className = "text-xs mb-1">{user.curso}</h2>
                                </div>

                                <div className = "flex items-center gap-1 mb-5">
                                    <Image src = {emailUser} alt = "icone email" className = ""  width={25} height={25}/>
                                    <h2 className = "text-xs">{user.email}</h2>
                                </div>
                            </div>
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
