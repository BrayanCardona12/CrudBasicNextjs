import { ToastContainer, toast } from 'react-toastify';
import NavBar from './navBar';



function Layout({ children }) {
    return (
        <>
            <div classNameName="bg-red-300 h-screen p-10">
            <NavBar/>
                <div classNameName="container mx-auto h-full px-10">
               
                    {children}

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Layout