import { ToastContainer } from "react-toastify"
import { useAuth } from "../hooks/useAuth"
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import useApp from "../hooks/useApp";
import { useEffect } from "react";

export default function Layout() {
    const { user } = useAuth({ middleware: 'auth', url: '/' })
    const {loadingState } = useApp();


    return (
        <>
            <Header />

            <Outlet />

            <Footer />

            <Loading
                state={loadingState}
            />
            <ToastContainer />
        </>
    )
}