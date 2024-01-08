import { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import clienteAxios from "../config/axios";
import {toast} from 'react-toastify'
import ModalCrearMovimientos from "../components/Modals/ModalCrearMovimiento";


const AppContext = createContext();

const AppProvider = ({ children }) => {

    //CONST
    const user = JSON.parse(sessionStorage.getItem("user"));

    //STATES
    const [cuenta, setCuenta] = useState({});
    const [movimientos, setMovimientos] = useState({});
    const [objetivo, setObjetivo] = useState({});
    const [objetivos, setObjetivos] = useState([]);
    const [loadingState, setLoadingState] = useState(true);
    const [loadingObjetos, setLoadingObjetos] = useState(false);
    const [loadingMovimientos, setLoadingMovimientos] = useState(false);
    const [modalMovimientosOpen, setModalMovimientosOpen] = useState(false);
    const [modalObjetivoOpen, setModalCrearObjetivoOpen] = useState(false);
    const [modalCrearMovimientoOpen, setModalCrearMovimientoOpen] = useState(false);


    //HANDLES
    const handleSetCuenta = cuenta => {
        setCuenta(cuenta);
    }

    const handleSetMoviminetos = cuenta => {
        setCuenta(cuenta);
    }

    const handleClickModalMovimientos = () => {
        setModalMovimientosOpen(!modalMovimientosOpen);
    }

    const handleClickModalCrearObjetivo = () => {
        setModalCrearObjetivoOpen(!modalObjetivoOpen);
    }

    const handleClickModalCrearMovimiento = () => {
        setModalCrearMovimientoOpen(!modalCrearMovimientoOpen)
    }
    
    const handleSetObjetivo = objetivo => {
        setObjetivo(objetivo);
    }

    const handleSetObjetivos = objetivos => {
        setObjetivos(objetivos);
    }

    //FUNTIONS
    const obtenerCuenta = async () => {

        const interval = setInterval(async () => {
            setLoadingState(true);
            const token = localStorage.getItem('AUTH_TOKEN');

            if (token !== null) {
                clearInterval(interval)

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

        setLoadingState(true);
        if (user !== null) {

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

    const obtenerObjetivos = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
    
        if (token !== null) {
            setLoadingObjetos(true)
          try {
            const { data } = await clienteAxios.post('/api/cuenta/goals', {
            }, {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            });
            setObjetivos(data.data ?? [])
          } catch (error) {
            console.log(error)
          }
          setLoadingObjetos(false)
        }
      }

    const addOrUpdateObjetivo = async (datos, setErrores) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            const { data } = await clienteAxios.post('/api/cuenta/goals/set', datos, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            obtenerObjetivos();
            
            if (data.status === 1) {
                toast.success(data.message)
            }

            if (data.status === 0) {
                toast.error(data.message)
            }

            handleClickModalCrearObjetivo();

        } catch (error) {
            console.log(error)
        }
    }
    
    const showToastify = async (message, type) => {
        toast[type](message);
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
                modalMovimientosOpen,
                handleClickModalMovimientos,
                modalObjetivoOpen,
                handleClickModalCrearObjetivo,
                handleClickModalCrearMovimiento,
                objetivo,
                handleSetObjetivo,
                addOrUpdateObjetivo,
                objetivos,
                obtenerObjetivos,
                loadingObjetos,
                modalCrearMovimientoOpen,
                showToastify
            }}
        >{children}</AppContext.Provider>
    )
}

export {
    AppProvider
}

export default AppContext