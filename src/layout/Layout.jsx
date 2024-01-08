import { ToastContainer } from "react-toastify"
import { useAuth } from "../hooks/useAuth"
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import useApp from "../hooks/useApp";
import Modal from 'react-modal'
import ModalMovimientos from "../components/Modals/ModalMovimientos";
import ModalCrearObjetivo from "../components/Modals/ModalCrearObjetivo";

import "react-toastify/dist/ReactToastify.css"
import { useEffect, useState } from "react";
import ModalCrearMovimiento from "../components/Modals/ModalCrearMovimiento";

export default function Layout() {
    const { user } = useAuth({ middleware: 'auth', url: '/' })
    const { loadingState, modalMovimientosOpen, modalObjetivoOpen, modalCrearMovimientoOpen} = useApp();
    const [loading, setLoading] = useState(true);

    // Modal Styles
    const customStylesModal = {
        content: {
            top: "15%",
            left: "25%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
        },
    };

    Modal.setAppElement('#root');

    setTimeout(() => {
        setLoading(loadingState)
    }, 1000)

    return (
        <>
            <Loading
                state={loading}
            />
            
            <Header />

            <Outlet />

            <Footer />

            {(
                <Modal isOpen={modalMovimientosOpen} closeTimeoutMS={2000} style={customStylesModal}>
                    <ModalMovimientos className="w-40" />
                </Modal>
            )}

            {(
                <Modal isOpen={modalObjetivoOpen} closeTimeoutMS={2000} style={customStylesModal}>
                    <ModalCrearObjetivo className="w-40" />
                </Modal>
            )}

            {(
                <Modal isOpen={modalCrearMovimientoOpen} closeTimeoutMS={2000} style={customStylesModal}>
                    <ModalCrearMovimiento className="w-40" />
                </Modal>
            )}


            <ToastContainer />
        </>
    )
}