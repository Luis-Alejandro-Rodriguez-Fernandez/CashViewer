import Movimiento from "./Movimiento"

export default function Movimientos({ movimientos, completo = false }) {

    return (
        <div className="mt-2">
            {movimientos.length > 0
                ? movimientos.map(movimiento => {
                    return <Movimiento key={movimiento.id} movimiento={movimiento} completo={completo} />
                })
                : <span>No se han encontrado movimientos de en esta cuenta </span>
            }
        </div>
    )
}