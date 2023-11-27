import { formatearDinero, limitText } from "../helpers/currency";

export default function Movimiento({ movimiento }) {

    return (
        <div className="flex justify-between m-2 pb-1 border-b">
            <span className="text-gray-700 font-bold">{limitText(movimiento.concepto)}</span>
            <p className="text-gray-700 font-semibold">{formatearDinero(movimiento.cantidad)}</p>
        </div>
    )
}