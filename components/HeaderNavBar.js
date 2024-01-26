"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeaderNavBar() {
  const { data: session } = useSession();
  const [profileClick, setProfileClick] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProfileClick(false);
    }, 6000);
  }, [profileClick == true]);

  return (
   
      <div
        className="flex items-center
    justify-between p-2 shadow-md lg:pr-10  bg-[#0e7490] font-primary text-white"
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={110} height={100} />
          <a href="/" className="cursor-pointer hover:text-blue-200">Home</a>
        </div>
        <h1>Mapas</h1>
        <div>
          {session?.user ? (
            <>
              <Image
                src={session.user.image}
                loader={() => session.user.image}
                alt="user"
                width={40}
                height={40}
                onClick={() => setProfileClick(!profileClick)}
                className="rounded-full cursor-pointer 
              hover:border-[2px] border-blue-500"
              />
              {profileClick ? (
                <div
                  className="absolute bg-white p-3
            shadow-md border-[1px] mt-2 z-30
            right-4 "
                >
                  <h2
                    className="cursor-pointer
               hover:text-blue-500 hover:font-bold text-neutral-950"
                    onClick={() => signOut()}
                  >
                    Salir
                  </h2>
                </div>
              ) : null}
            </>
          ) : null}
        </div>

      </div>
    )
 
}

export default HeaderNavBar;
