import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    { title: 'Resume Analyser | Auth'},
    { name: 'AI Resume Analyser', content: 'An AI that works for you, not the Recruiter' },
])
const Auth = () => {
    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next)
    }, [auth.isAuthenticated, next])

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
            <section className="bg-white flex flex-col gap-8 rounded-2xl p-10">
                <div className="flex flex-col gap-2 items-center text-center">
                    <h1>Welcome</h1>
                    <h2>Sign into your Account</h2>
                </div>
                <div>
                    {isLoading ? 
                        (<button className="auth-button animate-pulse">Loading...</button>)
                        : 
                        <>
                            {auth.isAuthenticated ? 
                            (<button className="auth-button" onClick={auth.signOut}>Sign Out</button>) 
                                : 
                            (<button className="auth-button" onClick={auth.signIn}>Sign In</button>)}
                        </>
                    }
                </div>
            </section>
        </div>
    </main>
  )
}

export default Auth
