import React from "react";

const Coment = ({name}) => {
  return (
    <div className="bg-foreground flex flex-col rounded-2xl h-3/5 w-5/12">
        <div className="mt-3 ml-4 h-1/4 w-1/4">
            <h1 className="font-bold">{name}</h1> 
        </div>
        <div className="my-3 mx-4 h-fit w-fit">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium cumque aspernatur. Dolorem quas voluptas id, dignissimos asperiores nemo enim dolorum ratione vel facilis nisi expedita tenetur error corporis et!</p>
        </div>
        <div className="mb-3 mx-4 h-fit w-fit">
            <h2> &#x2709; 5 comentários</h2>
        </div>
    </div>
  );
};

export default Coment;
