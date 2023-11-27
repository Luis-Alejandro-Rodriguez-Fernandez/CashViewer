import { createRef, useRef, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
    const { user, logout } = useAuth({ middleware: 'auth', url: '/' });
    const [navState, setNavState] = useState(true);

    const navButtonRef = createRef();

    const handleChangeStateNav = () => {
        setNavState(!navState)
        navButtonRef.current.style.width = navState ? "200px" : "0px";
    }

    const handleLogout = async () => {
        if (user !== null) {
            logout();
        }
    }

    return (
        <header>
            {
                user === null
                    ? null
                    : <div>
                        <div className="flex items-center justify-between w-full">
                            <img src='/img/logo.png'
                                alt='imagen logo'
                                className='h-auto image-header'
                            />
                            <div className="hover:cursor-pointer mx-5" onClick={handleChangeStateNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                        </div>
                        <div className="sidenav" ref={navButtonRef}>
                            <p>
                                <span className="mx-3">Hola, {user.name}</span>
                                <a href="#" className="closebtn" onClick={handleChangeStateNav} >&times;</a>
                            </p>
                            <a onClick={() => { handleLogout() }}>Cerrar sesión</a>
                        </div>
                    </div>
            }
        </header>
    )
}