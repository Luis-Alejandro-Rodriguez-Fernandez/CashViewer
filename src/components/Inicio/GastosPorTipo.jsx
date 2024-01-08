import { useEffect } from "react";
import clienteAxios from "../../config/axios";
import PieChart from "../Charts/PieChart";
import moment from "moment";
import { useState } from "react";

export default function GastosPorTipo({ children }) {

    useEffect(() => {
        obtenerGastos();
    }, []);

    const [gastos, setGastos] = useState({});

    const obtenerGastos = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        if (token !== null) {
            try {
                const { data } = await clienteAxios.post('/api/movimientos/spend_by_type', {
                    fecha_desde: moment().startOf('month').format('YYYY-MM-DD'),
                    fecha_hasta: moment().endOf('month').format('YYYY-MM-DD'),
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setGastos(data.data ?? {})
            } catch (error) {
                console.log(error)
            }

        }
    }

    return (
        <>
            <div className="font-bold text-2xl text-center mt-4 mb-6">Gastos por tipo</div>
            <p className="text-sm font-semibold text-right my-4 mr-4">Mes actual</p>
            <PieChart
                series={gastos.series ?? []}
                labels={gastos.labels ?? []}
            />
        </>
    )

}