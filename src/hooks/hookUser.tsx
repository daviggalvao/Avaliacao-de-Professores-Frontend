import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getUser } from '../app/_api/userApi';
import { UserData } from '../types/User';
import { userAgent } from 'next/server';

export function useUser() {
  const [user, setUser] = useState<UserData | null>(null)

  const { id } = useParams()
  const router = useRouter()

  useEffect(() => {

    if (!id || isNaN(Number(id))) {
      return router.push('/'); 
    }

    const fetchUser = async () => {
      try{
        const user = await getUser(Number(id));
        setUser(user);
      } 
      catch (error) {
        console.error("Erro ao buscar usuário:", error);
        router.push('/');
      }
    };
    fetchUser();
  }, [id, router]);

  return user;
}
