"use client"

import Image from "next/image";
import Link from "next/link";
import '../../aa_extra/styles/globals.css';
import styles from '../styles/feed.module.css';

import { useUser } from '@/hooks/hookUser'; 
import Header from '@/components/Header';
import Avaliacao from '@/components/Avaliacao'

export default function PerfilAluno() {
    const user = useUser();
    
    if (!user) {
        return <p>Carregando...</p>; // Exibe algo enquanto os dados de User estão sendo carregados
    }
    else {
        return (
            <div>
                <Header {...user}/>

                <div className = "flex justify-center items-center h-screen bg-white">

                    <div className = "bg-white w-1/4 h-full border-2 border-green-600">

                        <div className = "bg-white-100 w-full h-1/4 border-b-2 border-green-600">

                            <Image src={user.foto_perfil || 'src/assets/default_profile_picture.png'} alt="Foto do Usuário" 
                            className= "w-32 h-32 border border-black rounded-full ml-16 mt-8"/>

                            <h1 className = "text-xl font-bold ml-16">{user.nome}</h1>

                            <h2 className = "text-xs ml-16">{user.curso}</h2>

                            <h2 className = "text-xs ml-16">{user.email}</h2>
                        </div>

                        <div className = "flex-col items-center justify-center">
                            <h1 className = "text-xl font-bold ml-4 mt-4" >Publicações</h1>

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
