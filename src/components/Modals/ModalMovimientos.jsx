import { useEffect, useState } from "react";
import useApp from "../../hooks/useApp";
import clienteAxios from "../../config/axios";
import Movimientos from "../Movimientos";
import { CircularProgress } from "react-cssfx-loading";

export default function modalMovimientos(props) {
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [loadingState, setLoadingState] = useState(true);
    const { cuenta, handleClickModalMovimientos, loadingMovimientos } = useApp();

    const handleVerMas = () => {
        let calc = (limit + offset) - (offset == 0 ? 1 : 0);

        setOffset(calc);
    }

    useEffect(() => {
        obtenerMovimientos();
    }, []);

    const [movimientos, setMovimientos] = useState([]);

    const obtenerMovimientos = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        setLoadingState(true);

        if (token !== null) {
            try {
                const { data } = await clienteAxios.post('/api/movimientos/', {
                    limit: limit,
                    offset: offset,
                    cuenta: cuenta.id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setMovimientos(data.data ?? {})
            } catch (error) {
                console.log(error)
            }

        }

        setLoadingState(false);
    }

    if (loadingState) {
        return (
            <div className="p-4 md-modal">
                <div className=" flex justify-center items-center overflow-hidden">
                    <CircularProgress className="" color="#69a018" height="100px" width="100px" />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex items-end justify-end">
                <button
                    onClick={handleClickModalMovimientos}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="p-4 md-modal overflow-hidden">
                <div className="">
                    <h1 className="text-3xl font-bold underline">Movimientos de la cuenta: {cuenta.name}</h1>
                    <h4 className="text-md font-semibold text-gray-600 mt-4"> Tus últimos movimientos</h4>
                    <hr />
                </div>
                <div className="md-modal-content overflow-auto">
                    <Movimientos movimientos={movimientos} completo={true} />
                </div>
            </div>
        </>
    )
}