import Movimiento from "./Movimiento"

export default function Movimientos({ movimientos }) {

    return (
        <div className="mt-2">
            {movimientos.map(movimiento => {
                return <Movimiento key={movimiento.id} movimiento={movimiento}/>
            })}
        </div>
    )
}