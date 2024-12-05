'use client';

import { useState } from 'react';
import Image from "next/image";
import '../styles/globals.css';
import stylesmc from '../styles/modalcoment.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
      <div className={stylesmc.d}>
        <button onClick={() => setOpen(!open)} className={stylesmc.buttonc}>Comentar</button>
        {open ? (
            <div>
                
            </div>
        ) : (<div className={stylesmc.hide}></div>)}
      </div>
  );
}
