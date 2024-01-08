import { limitText } from "../helpers";
import { formatearDinero } from "../helpers/currency";

export default function Movimiento({ movimiento, completo = false }) {

    return (
        <div className="grid grid-cols-8 m-2 pb-1 border-b">
            <div>
                {
                    movimiento.type_for_user === 1 // Ingreso
                        ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#69a018">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                        )
                        : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#ef4444">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
                            </svg>
                        )
                }
            </div>
            <span className={"text-gray-700 font-bold " + (completo ? "col-span-5" : "col-span-6")}>{limitText(movimiento.concepto)}</span>
            <p className={"text-gray-700 font-semibold w-1/6"}>{formatearDinero(movimiento.cantidad)}</p>
            {completo
                ? <p className="">{movimiento.fecha.ver}</p>
                : ""
            }
        </div>
    )
}