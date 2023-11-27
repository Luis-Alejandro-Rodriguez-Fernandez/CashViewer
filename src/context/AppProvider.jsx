import { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import clienteAxios from "../config/axios";


const AppContext = createContext();

const AppProvider = ({ children }) => {

    //CONST
    const user = JSON.parse(sessionStorage.getItem("user"));

    //STATES
    const [cuenta, setCuenta] = useState({});
    const [movimientos, setMovimientos] = useState({});
    const [loadingState, setLoadingState] = useState(false);


    //HANDLES
    const handleSetCuenta = cuenta => {
        setCuenta(cuenta);
    }

    const handleSetMoviminetos = cuenta => {
        setCuenta(cuenta);
    }

    //FUNTIONS
    const obtenerCuenta = async () => {

        const interval = setInterval(async () => {
            const token = localStorage.getItem('AUTH_TOKEN');

            if (token !== null) {
                clearInterval(interval)
                setLoadingState(true);

                try {

                    const { data } = await clienteAxios.post('/api/cuenta', {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });

                    handleSetCuenta(data.data)
                } catch (error) {
                    console.log(error)
                }

                setLoadingState(false);

            }
        }, 300);

    }

    const obtenerMovimientos = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        if (user !== null) {
            setLoadingState(true);

            try {
                const { data } = await clienteAxios.get('/api/cuenta/movimientos', {
                    id: cuenta.id
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                // handleSetCuenta(data)
            } catch (error) {
                console.log(error)
            }

            setLoadingState(false);
        }
    }

    return (
        <AppContext.Provider
            value={{
                obtenerCuenta,
                obtenerMovimientos,
                cuenta,
                handleSetCuenta,
                movimientos,
                handleSetMoviminetos,
                loadingState,
                setLoadingState,
            }}
        >{children}</AppContext.Provider>
    )
}

export {
    AppProvider
}

export default AppContext