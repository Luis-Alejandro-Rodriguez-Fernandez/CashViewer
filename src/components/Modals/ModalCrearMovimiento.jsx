import { createRef, useState } from "react";
import useApp from "../../hooks/useApp";
import Alerta from "../Alerta";
import { Dropdown } from 'primereact/dropdown';

export default function ModalCrearMovimiento(props) {

    const saldoInicialRef = createRef();

    const { handleClickModalCrearMovimiento, showToastify } = useApp();

    const [errores, setErrores] = useState([]);
    const [stateForm, setStateForm] = useState(true);

    const handleSubmitIngreso = async e => {
        e.preventDefault();

        if (validateForm()) {
            const datos = {
                name: nameRef.current.value,
            }

        }

    }

    const handleSubmitGasto = async e => {
        e.preventDefault();

        if (validateForm()) {
            const datos = {
                name: nameRef.current.value,
            }

        }

    }

    const handleStateForm = async state => {
        setStateForm(state);
    }

    const validateForm = () => {

        // if (!nameRef.current.value) {
        //     focusRef(nameRef, setErrores, goalErrors.name_required)
        //     return false;
        // }

        // if (!descripcionRef.current.value) {
        //     focusRef(descripcionRef, setErrores, goalErrors.description_required)
        //     return false;
        // }

        // if (!metaRef.current.value) {
        //     focusRef(metaRef, setErrores, goalErrors.goal_required)
        //     return false;
        // }

        setErrores([]);
        return true;
    }

    return (
        <>
            <div className="flex items-end justify-end">
                <button
                    onClick={handleClickModalCrearMovimiento}
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
                        Nuevo movimiento
                    </h1>
                    <p className="font-semibold text-sm text-slate-500">
                        A continuación podras añadir un nuevo movimiento a tu cuenta.
                    </p>
                    <div className="grid grid-cols-3 mt-4">
                        <div className={"flex justify-center items-center cursor-pointer " + (stateForm ? "tab-active" : "")} onClick={() => { handleStateForm(true) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#69a018">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xl font-bold">Añadir Ingreso</p>
                        </div>
                        <div className={"flex justify-center items-center cursor-pointer " + (!stateForm ? "tab-active" : "")} onClick={() => { handleStateForm(false) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#ef4444">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xl font-bold">Añadir Gasto</p>
                        </div>
                    </div>
                </div>
                <div id="addIngreso" className={"h-5/6 " + (stateForm ? "" : "hidden")}>
                    <Alerta>{errores}</Alerta>
                    <form className="grid grid-cols-2 grid-rows-3 gap-4"
                        noValidate
                        onSubmit={handleSubmitIngreso}
                    >
                        <p>Form Ingresos</p>
                        <Dropdown value={0} options={['Hola', 'Hola2', 'Hola3']} optionLabel="name"
                            placeholder="Select a City" className="w-full md:w-14rem" />

                        <div className="flex justify-evenly items-center col-span-2 mt-10">
                            <span
                                className="bg-red-500 hover:bg-red-600 text-white w-2/6 mt-5 p-2 text-center rounded-md uppercase font-bold cursor-pointer"
                                onClick={handleClickModalCrearMovimiento}
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
                <div id="addGasto" className={"h-5/6 " + (!stateForm ? "" : "hidden")}>
                    <Alerta>{errores}</Alerta>
                    <form className="grid grid-cols-2 grid-rows-3 gap-4"
                        noValidate
                        onSubmit={handleSubmitGasto}
                    >
                        <p>Form Gastos</p>
                        <div className="flex justify-evenly items-center col-span-2 mt-10">
                            <span
                                className="bg-red-500 hover:bg-red-600 text-white w-2/6 mt-5 p-2 text-center rounded-md uppercase font-bold cursor-pointer"
                                onClick={handleClickModalCrearMovimiento}
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