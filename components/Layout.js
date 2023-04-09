import { ToastContainer, toast } from 'react-toastify';
import NavBar from './navBar';



function Layout({ children }) {
    return (
        <>
            <div className="bg-gray-200 h-screen">
                <NavBar />
                <div className="container mx-auto p-10">

                    {children}

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Layout