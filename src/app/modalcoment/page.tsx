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
            <div className={stylesmc.modal}>
              <br />
                <div className={stylesmc.caixam}>
                  <div className={stylesmc.caixamn}>
                    <br />
                    <div className={stylesmc.reta}></div>
                    <input className={stylesmc.coment} type="text" id="comment"/>
                  </div>
                  <div className={stylesmc.space}>
                    <button className = {stylesmc.buttonc}>Comentar</button>
                    <button className = {stylesmc.buttonc}>Sair</button>
                  </div>
                </div>
            </div>
        ) : (<div className={stylesmc.hide}></div>)}
      </div>
  );
}
