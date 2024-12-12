import React from "react";
import Image from "next/image";

const Coment = ({name}) => {
  return (
    <div className="my-3 bg-foreground flex rounded-2xl h-3/5 w-11/12">
        <div className="h-full bg-black rounded-full mt-3 ml-3">
            <Image src="perfil.svg" alt="Foto de Perfil" height={100} width={100}></Image>
        </div>
        <div className="flex flex-col">
            <div className="mt-3 ml-4 h-1/4 w-1/4">
                <h1 className="font-bold">{name}</h1> 
            </div>
            <div className="my-2 mx-4 h-fit w-fit">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium cumque aspernatur. Dolorem quas voluptas id, dignissimos asperiores nemo enim dolorum ratione vel facilis nisi expedita tenetur error corporis et!</p>
            </div>
            <div className="mb-3 mx-4 h-fit w-fit">
                <h2> &#x2709; Comentários</h2>
            </div>
        </div>
    </div>
  );
};

export default Coment;
