"use client"

import HomeNavbar from "@/app/Components/Navbar/HomeNavbar";

const Layout = ({children}) => {

    return ( 
        <>
            <HomeNavbar />
            {children}
        </> 
    );
}
 
export default Layout;