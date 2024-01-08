import { useAuth } from "../hooks/useAuth";
import useApp from "../hooks/useApp";
import { useEffect } from "react";
import { formatearDinero } from "../helpers/currency";
import Movimientos from "../components/Movimientos";
import SwiperInicio from "../components/SwiperInicio";
import BalanceTotal from "../components/Inicio/BalanceTotal";
import GastosPorTipo from "../components/Inicio/GastosPorTipo";
import BalanceCurrentYear from "../components/Inicio/BalanceCurrentYear";

export default function Inicio() {
    // CONST
    const {
        obtenerCuenta,
        cuenta,
        handleClickModalMovimientos,
        handleClickModalCrearObjetivo,
        handleClickModalCrearMovimiento,
    } = useApp();
    const ready = Object.keys(cuenta).length > 0;

    //VARIABLES
    let saldo = ready ? formatearDinero(cuenta.saldo) : formatearDinero(0);
    let movimientos = ready ? cuenta.movimientos : [];

    // EFFECTS
    useEffect(() => {
        obtenerCuenta();
    }, []);

    return (
        <main className="bg-slate-100 grid grid-cols-6 grid-rows-3 gap-4 p-3">
            <div className="box col-span-3 curved-box shadow-lg grid grid-rows-3">
                <div className="p-3">
                    <div className="flex justify-between">
                        <span className="font-bold text-2xl text-slate-700">{cuenta.name}</span>
                        <span className="cursor-pointer" onClick={()=>{handleClickModalCrearMovimiento()}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-slate-800">{saldo}</span>
                    </div>
                </div>
                <div className="p-3 row-span-2">
                    <div className="flex justify-between">
                        <span>Últimos movimientos</span>
                        <span className="text-blue-500 cursor-pointer" onClick={() => { handleClickModalMovimientos() }}>Ver más</span>
                    </div>
                    <div className="overflow-hidden">
                        <Movimientos movimientos={movimientos} />
                    </div>
                </div>
            </div>
            <div className="box col-span-3 curved-box shadow-lg flex-col">
                <div className="flex justify-end mx-4">
                    <span className="cursor-pointer mt-1" onClick={() => { handleClickModalCrearObjetivo() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </div>
                <div className="w-full p-1 flex items-center justify-center">
                    <SwiperInicio />
                </div>
            </div>

            <div className="box curved-box shadow-lg row-span-2">
                <BalanceTotal />
            </div>
            <div className="box curved-box col-span-2 shadow-lg row-span-2">
                <GastosPorTipo />
            </div>
            <div className="box col-span-3 row-span-2 shadow-lg curved-box">
                <BalanceCurrentYear />
            </div>
        </main>
    )
}