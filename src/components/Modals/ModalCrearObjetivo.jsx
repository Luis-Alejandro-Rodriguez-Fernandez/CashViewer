import { createRef, useState } from "react";
import useApp from "../../hooks/useApp";
import Alerta from "../Alerta";
import { goalErrors } from '../../const/messages/errors';
import { focusRef } from "../../helpers";

export default function ModalCrearObjetivo(props) {

    const nameRef = createRef();
    const descripcionRef = createRef();
    const metaRef = createRef();
    const saldoInicialRef = createRef();

    const { handleClickModalCrearObjetivo, addOrUpdateObjetivo } = useApp();

    const [errores, setErrores] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        if (validateForm()) {
            const datos = {
                name: nameRef.current.value,
                descripcion: descripcionRef.current.value,
                objetivo: metaRef.current.value,
                saldo: saldoInicialRef.current.value,
            }

            addOrUpdateObjetivo(datos)
        }

    }

    const validateForm = () => {

        if (!nameRef.current.value) {
            focusRef(nameRef, setErrores, goalErrors.name_required)
            return false;
        }

        if (!descripcionRef.current.value) {
            focusRef(descripcionRef, setErrores, goalErrors.description_required)
            return false;
        }

        if (!metaRef.current.value) {
            focusRef(metaRef, setErrores, goalErrors.goal_required)
            return false;
        }

        setErrores([]);
        return true;
    }

    return (
        <>
            <div className="flex items-end justify-end">
                <button
                    onClick={handleClickModalCrearObjetivo}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-2 md-modal">

                <div className="h-1/6">
                    <h1 className="font-bold text-2xl">
                        Nuevo objetivo
                    </h1>
                    <p className="font-semibold text-sm text-slate-500">
                        A continuación podras crear una nueva meta en la que poder ahorrar.
                    </p>
                </div>
                <div className="h-5/6">
                    <Alerta>{errores}</Alerta>
                    <form className="grid grid-cols-2 grid-rows-3 gap-4"
                        noValidate
                        onSubmit={handleSubmit}
                    >

                        <div className="">
                            <label
                                className="text-md font-semibold w-full block text-slate-800"
                                htmlFor="name">
                                Nombre<span className="text-red">*</span>:
                            </label>
                            < input
                                type="text"
                                id="name"
                                className="mt-2 w-full p-3 bg-gray-50"
                                name="name"
                                placeholder="Irme de viaje"
                                ref={nameRef}
                            />
                        </div>

                        <div className="col-span-2">
                            <label
                                className="text-md font-semibold text-slate-800"
                                htmlFor="descripcion">
                                Descripción<span className="text-red">*</span>:
                            </label>
                            < input
                                type="text"
                                id="descripcion"
                                className="mt-2 w-full p-3 bg-gray-50"
                                name="descripcion"
                                placeholder="Vamos a irnos a Bora Bora"
                                ref={descripcionRef}
                            />
                        </div>
                        <div className="">
                            <label
                                className="text-md font-semibold text-slate-800"
                                htmlFor="objetivo">
                                Objetivo<span className="text-red">*</span>:
                            </label>
                            <input
                                id="objetivo"
                                className="mt-2 w-full p-3 bg-gray-50 mask-inp-num"
                                name="objetivo"
                                ref={metaRef}
                            />
                        </div>
                        <div className="">
                            <label
                                className="text-md font-semibold text-slate-800"
                                htmlFor="saldo">
                                Saldo inicial:
                            </label>
                            <input
                                className="mt-2 w-full p-3 bg-gray-50 mask-inp-num"
                                id="saldo"
                                name="saldo"
                                ref={saldoInicialRef}
                            />
                        </div>

                        <div className="flex justify-evenly items-center col-span-2 mt-10">
                            <span
                                className="bg-red-500 hover:bg-red-600 text-white w-2/6 mt-5 p-2 text-center rounded-md uppercase font-bold cursor-pointer"
                                onClick={handleClickModalCrearObjetivo}
                            >
                                Cancelar
                            </span>

                            <button
                                type="submit"
                                className="bg-lime-500 hover:bg-lime-600 text-white w-2/6 mt-5 p-2 rounded-md uppercase font-bold cursor-pointer">
                                Completar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}