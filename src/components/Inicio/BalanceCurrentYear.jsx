import { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";
import LineChart from "../Charts/LineChart";
import moment from "moment";

export default function BalanceCurrentYear({children}) {

    useEffect(() => {
        obtenerBalance();
    }, []);

    const [balance, setBalance] = useState({});

    const obtenerBalance = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        if (token !== null) {
            try {
                const { data } = await clienteAxios.post('/api/movimientos/balance_by_time', {
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
            <div className="font-bold text-2xl text-center mt-4 mb-8">Balance del año actual</div>
            <LineChart series={balance.series ?? []} categories={balance.categories ?? []} />
        </>
    )
}