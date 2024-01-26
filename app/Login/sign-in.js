import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/client'

const SignInPage = () => {
  const [session, loading] = useSession()

  useEffect(() => {
    signIn('google')
   
  }, [session, loading])

  return (   <div
    style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        background: "white",
    }}
></div>)
}

export default SignInPage