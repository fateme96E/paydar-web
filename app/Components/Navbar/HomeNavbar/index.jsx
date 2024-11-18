'use client'

import contactIcon from "@/app/assets/icons/contact/contact.svg"
import Image from "next/image";
import classes from "./styles.module.scss"
import logo from "@/app/assets/global/logo-text.svg";
import HamburgerMenu from "@/app/Components/HamburgerMenu";

const HomeNavbar = () => {

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className={classes.container}>
            <nav className={classes.menuContainer} role="navigation">
                <Image src={logo} className={classes.logo} width={100} height={100} loading="lazy" alt='logo'/>
                <HamburgerMenu handleScroll={handleScroll} />
            </nav>
            <ul>
                <li> <span> شبکه سرمایه انسانی پایدار </span> </li>
                <li onClick={() => handleScroll("about-us")}> <span> درباره ما </span> </li>
                <li onClick={() => handleScroll("overview")}> <span> راهکار ها </span> </li>
                <li onClick={() => handleScroll("customers")}> <span> مشتریان </span> </li>
                <li onClick={() => handleScroll("footer")}> 
                    <span> تماس با ما </span>
                    <Image src={contactIcon} className={classes.icon} alt='contact-us'/>
                </li>
            </ul>
        </div>
    )
}

export default HomeNavbar;