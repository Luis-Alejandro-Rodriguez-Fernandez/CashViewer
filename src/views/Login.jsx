import { createRef, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import { focusRef } from "../helpers";
import { authErrores } from "../const/messages/errors";

export default function Login() {
    const emailRef = createRef();
    const passwordRef = createRef();

    const [errores, setErrores] = useState([]);
    const { login } = useAuth({
        middleware: 'guest',
        url: '/'
    });

    const handleSubmit = async e => {
        e.preventDefault();

        if (validateLoginForm()) {
            const datos = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }

            login(datos, setErrores)
        }

    }

    const validateLoginForm = () => {
        if (!emailRef.current.value) {
            focusRef(emailRef, setErrores, authErrores.email_required)
            return false;
        }

        if (!passwordRef.current.value) {
            focusRef(passwordRef, setErrores, authErrores.password_required)
            return false;
        }

        setErrores([]);
        return true;
    }

    return (
        <>
            <h1 className="text-4xl font-bold">Iniciar sesión</h1>
            <p className="text-xl">Inicia sesión para acceder a tu panel de gestión</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-10 py-5">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >

                    <Alerta>{errores}</Alerta>

                    <div className="mb-4">
                        <label
                            className="text-md font-semibold text-slate-800"
                            htmlFor="email">
                            Correo electrónico:
                        </label>
                        < input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu email"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-md font-semibold text-slate-800"
                            htmlFor="password">
                            Contraseña:
                        </label>
                        < input
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu contraseña"
                            ref={passwordRef}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Iniciar sesión"
                        className="bg-lime-500 hover:bg-lime-600 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/registro">
                    ¿No tienes una cuenta? <br />Crea una pulsando aquí
                </Link>
            </nav>
        </>
    )
}

