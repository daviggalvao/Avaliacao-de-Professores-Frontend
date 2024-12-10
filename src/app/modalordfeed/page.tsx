'use client';

import { useState } from 'react';
import '../styles/globals.css';
import stylesmc from '../styles/modal.module.css';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
      <div>
        <button onClick={() => setOpen(!open)} className={stylesmc.buttonc}>Ordenar</button>
        {open ? (
            <div className="h-1/100 w-1/100 fixed">
                <div className="">Vasco</div>
            </div>
        ) : (<div className="hidden"></div>)}
      </div>
  );
}
