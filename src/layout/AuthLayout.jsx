import { Outlet } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AuthLayout() {

    return (
        <div>
            <Header/>
            <main className='max-w-6xl m-auto flex flex-col md:flex-row items-center'>
                <img src='/img/logo.png'
                    alt='imagen logo'
                    className='w-1/2 object-contain'
                />

                <div className='p-10 w-1/2'>
                    <Outlet />
                </div>
            </main>

            <Footer />

            <ToastContainer />
        </div>
    )
}