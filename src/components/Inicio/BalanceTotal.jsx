import SimpleCard from "../SimpleCard";
import { useEffect } from "react";
import clienteAxios from "../../config/axios";
import { formatearDinero } from "../../helpers/currency";
import moment from "moment";
import { useState } from "react";

export default function BalanceTotal({ children }) {

    useEffect(()=> {
        obtenerBalance();
    }, []);

    const [balance, setBalance] = useState({})

    const obtenerBalance = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        if (token !== null) {
            try {
                const { data } = await clienteAxios.post('/api/movimientos/balance', {
                    fecha_desde: moment().startOf('month').format('YYYY-MM-DD'),
                    fecha_hasta: moment().endOf('month').format('YYYY-MM-DD'),
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setBalance(data.data ?? {})
            } catch (error) {
                console.log(error)
            }

        }
    }



    return (
        <>
            <h2 className="text-2xl font-bold m-4 text-center">Balance de cuenta</h2>

            <SimpleCard
                title="Entradas"
                subtitle="Mes actual"
                color="#FFFFFFFF"
                fontColor=""
                componentClasses="flex justify-center items-center w-full h-2/5"
                containerClasses="curved-box w-5/6 p-2 h-5/6 shadow-lg cursor-pointer"
                titleClasses="font-bold text-3xl text-center"
                subtitleClasses="text-sm font-semibold text-right mt-4"
                dataContainerClasses="flex justify-center items-center"
                dataClasses="text-4xl text-center text-green mt-3"
                data={formatearDinero(balance?.entrada ?? 0)}
            />

            <SimpleCard
                title="Salidas"
                subtitle="Mes actual"
                color="#FFFFFFFF"
                fontColor=""
                componentClasses="flex justify-center items-center w-full h-2/5"
                containerClasses="curved-box w-5/6 p-2 h-5/6 shadow-lg cursor-pointer"
                titleClasses="font-bold text-3xl text-center"
                subtitleClasses="text-sm font-semibold text-right mt-4"
                dataContainerClasses="flex justify-center items-center"
                dataClasses="text-4xl text-center text-red mt-3"
                data={formatearDinero(balance?.salida ?? 0)}
            />
        </>
    )
}