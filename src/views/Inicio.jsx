import { useAuth } from "../hooks/useAuth";
import useApp from "../hooks/useApp";
import { useEffect } from "react";
import { formatearDinero } from "../helpers/currency";
import clienteAxios from "../config/axios";
import Movimientos from "../components/Movimientos";
import BarChart from "../components/Charts/BarChart";
import PieChart from "../components/Charts/PieChart";
import SimpleCard from "../components/SimpleCard";
import SwiperInicio from "../components/SwiperInicio";

export default function Inicio() {
    // CONST
    const { user } = useAuth({ middleware: 'auth', url: '/' });
    const {
        obtenerCuenta,
        cuenta,
    } = useApp();
    const ready = Object.keys(cuenta).length > 0;
    const carrucel = [
        {
            id: 1,
            precio: 100,
            titulo: "Test1",
        },
        {
            id: 2,
            precio: 100,
            titulo: "Test1",
        },
        {
            id: 3,
            precio: 100,
            titulo: "Test1",
        },
        {
            id: 4,
            precio: 200,
            titulo: "Test1",
        },
    ];

    //VARIABLE
    let saldo = ready ? formatearDinero(cuenta.saldo) : formatearDinero(0);
    let movimientos = ready ? cuenta.movimientos : [];
    let offset = 0;
    let limit = 3;
    let init = 0;

    // EFFECTS
    useEffect(() => {
        obtenerCuenta();
    }, []);

    useEffect(() => { }, carrucel)

    return (
        <main className="bg-slate-100 grid grid-cols-4 grid-rows-3 gap-4 p-3">
            <div className="box col-span-2 curved-box shadow-lg grid grid-rows-3">
                <div className="p-3">
                    <div className="flex justify-between">
                        <span className="font-bold text-2xl text-slate-700">{cuenta.name}</span>
                        <span className="cursor-pointer">...</span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-slate-800">{saldo}</span>
                    </div>
                </div>
                <div className="p-3 row-span-2">
                    <div className="flex justify-between">
                        <span>Últimos movimientos</span>
                        <span className="text-blue-500 cursor-pointer">Ver más</span>
                    </div>
                    <div className="overflow-hidden">
                        <Movimientos movimientos={movimientos} />
                    </div>
                </div>
            </div>
            <div className="box col-span-2 curved-box shadow-lg flex">
                <div className="w-full p-2 flex">

                    {/* {
                        carrucel.map(caja => {
                            offset++;

                            if (offset >= init && offset <= limit) {
                                return <SimpleCard
                                    key={caja.id}
                                    title={formatearDinero(caja.precio)}
                                    subtitle={caja.titulo}
                                    color="#FFFFFFFF"
                                    fontColor=""
                                    componentClasses="flex justify-center items-center w-full h-full"
                                    containerClasses="curved-box w-5/6 p-2 h-5/6 shadow-lg cursor-pointer"
                                />
                            }
                        })
                    } */}

                    <SwiperInicio></SwiperInicio>

                </div>
            </div>

            <div className="box curved-box shadow-lg row-span-2">
                <h2 className="text-2xl font-bold m-4 text-center">Balance de cuenta</h2>

                <SimpleCard
                    title="Entradas"
                    subtitle="Mes actual"
                    color="#FFFFFFFF"
                    fontColor=""
                    componentClasses="flex justify-center items-center w-full h-2/5"
                    containerClasses="curved-box w-5/6 p-2 h-5/6 shadow-lg cursor-pointer"
                    dataClasses=""
                    data="200€"
                />

                <SimpleCard
                    title="Salidas"
                    subtitle="Mes actual"
                    color="#FFFFFFFF"
                    fontColor=""
                    componentClasses="flex justify-center items-center w-full h-2/5"
                    containerClasses="curved-box w-5/6 p-2 h-5/6 shadow-lg cursor-pointer"
                    dataClasses=""
                    data="100€"
                />
            </div>
            <div className="box curved-box shadow-lg row-span-2">
                <div className="h-1/4"></div>
                <PieChart />
            </div>
            <div className="box col-span-2 row-span-2 shadow-lg curved-box">
                <div className="h-1/4"></div>
                <BarChart />
            </div>
        </main>
    )
}