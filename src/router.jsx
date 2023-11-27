import {createBrowserRouter} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout';
import Login from './views/Login';
import Registro from './views/Registro';
import Layout from './layout/Layout';
import Inicio from './views/Inicio';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Inicio/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>,
            },
            {
                path: '/auth/registro',
                element: <Registro/>,
            }
        ]
    },
])

export default router;