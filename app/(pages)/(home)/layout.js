import Navbar from "@/app/Components/Navbar";


const Layout = ({children}) => {
    return ( 
    <>
        <Navbar />
        {children}
    </> 
    );
}
 
export default Layout;