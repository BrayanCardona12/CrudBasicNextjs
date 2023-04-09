import { ToastContainer, toast } from 'react-toastify';
import NavBar from './navBar';



function Layout({ children }) {
    return (
        <>
            <div class="bg-gray-200 h-screen">
            <NavBar/>
                <div class="container mx-auto h-full p-10">
                
                    {children}

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Layout