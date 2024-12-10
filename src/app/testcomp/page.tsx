'use client';

import { useState } from 'react';
import Image from "next/image";
import React from 'react';
import '../styles/globals.css';
import Coment from '@/components/Coment';

// como passar mais de um argumento na funcao
// colocar a fotinha no lado
// bgl da hora da msg
export default function Home() {
    const nameList = ["Lucas Ribamar", "Yuri Alberto", "So Teldo", "Ca Rille"]
    return (
        <div className="flex flex-col items-center justify-center h-auto w-auto">
            {nameList.map((name) => (
                <>
                    <br />
                    <Coment name={name}></Coment>
                </>
            ))}
        </div>
    );
  }