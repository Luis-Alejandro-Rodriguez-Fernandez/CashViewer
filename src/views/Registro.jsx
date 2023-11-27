import { Link } from 'react-router-dom'
import { createRef, useState } from 'react'
import { useAuth } from "../hooks/useAuth";
import { focusRef } from '../helpers';
import Alerta from '../components/Alerta';
import { authErrores } from '../const/messages/errors';
import { regexPatterns } from '../const/regex';

export default function Registro() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const [errores, setErrores] = useState([]);
    const { registro } = useAuth({ middleware: 'guest', url: '/' });

    const handleSubmit = async e => {
        e.preventDefault();

        if (validateRegistroForm()) {

            const datos = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: passwordConfirmationRef.current.value,
            }

            registro(datos, setErrores);
        }

    }

    const validateRegistroForm = () => {

        if (!nameRef.current.value) {
            focusRef(nameRef, setErrores, authErrores.name_required)
            return false;
        }

        if (!emailRef.current.value) {
            focusRef(emailRef, setErrores, authErrores.email_required)
            return false;
        }

        if (!passwordRef.current.value) {
            focusRef(passwordRef, setErrores, authErrores.password_required)
            return false;
        }

        if (!regexPatterns.password.test(passwordRef.current.value)) {
            focusRef(passwordRef, setErrores, authErrores.password_format_error)
            return false;
        }

        if (!passwordConfirmationRef.current.value) {
            focusRef(passwordConfirmationRef, setErrores, authErrores.password_confirmation_required)
            return false;
        }

        if (passwordConfirmationRef.current.value !== passwordRef.current.value) {
            focusRef(passwordConfirmationRef, setErrores, authErrores.password_missmatch)
            return false;
        }

        setErrores([]);
        return true;
    }

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta completando el formulario</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-10 py-5">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <Alerta>{errores}</Alerta>

                    <div className="mb-4">
                        <label
                            className="text-md font-semibold text-slate-800"
                            htmlFor="name">
                            Nombre:
                        </label>
                        < input
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Tu nombre"
                            ref={nameRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-md font-semibold text-slate-800"
                            htmlFor="email">
                            Correo electónico:
                        </label>
                        < input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu correo electrónico"
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

                    <div className="mb-4">
                        <label
                            className="text-md font-semibold text-slate-800"
                            htmlFor="password_confirmation">
                            Repetir contraseña:
                        </label>
                        < input
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Repite tu contraseña"
                            ref={passwordConfirmationRef}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Crear cuenta"
                        className="bg-lime-500 hover:bg-lime-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes una cuenta? Inicia sesión
                </Link>
            </nav>
        </>
    )
}