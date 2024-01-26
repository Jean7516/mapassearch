"use client";
import { signIn, useSession } from "next-auth/react";
import NewWindow from "react-new-window";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  const [popup, setPopUp] = useState(false);
 { useEffect(() => {
    if (session?.user) {
      router.push("/Home");
    }
  }, [session]);}

  return (
    <div className="flex flex-col  items-center   ">
      <div className="w-3/5 flex flex-raw  m-28  rounded-3xl border-bluexd  border-2 ">
        <div>
          <Image
            src="/loginmaps.jpg"
            alt="sdasd"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius:"24px"
            
            }}
            width={500}
            height={300}
          />
        </div>
        <div className="m-5 text-center ">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
            Mapas
          </h5>
          <p className="font-normal text-gray-700 my-3">
          Aplicacion que provee informacion sobre instituciones, restaurantes, etc. cerca de localización
          </p>
          <button
            onClick={() => setPopUp(true)}
            className="text-white  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55  mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 
    0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5
     52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2
      0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Inicia sesion con google
          </button>
          {popup && !session ? (
            <NewWindow url="/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2FLogin" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Login;
