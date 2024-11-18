'use client'

import React, { useState } from 'react';
import classes from "./styles.module.scss";
import logo from "@/app/assets/global/logo-text.svg";
import Image from 'next/image';
import { TbMenuDeep } from "react-icons/tb";

const HamburgerMenu = ({handleScroll}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev)
    const closeMenu = () => setIsOpen(false)

    const onClickItems = (sectionId) => {
        closeMenu();
        handleScroll(sectionId);
    }

    return (
        <nav className={classes.menuContainer} role="navigation">
            <input
                type="checkbox"
                id="menuToggle"
                className={classes.menuToggle}
                checked={isOpen}
                onChange={toggleMenu}
            />
      
            <div className={`${classes.overlay} ${isOpen ? classes.overlayVisible : ''}`} onClick={closeMenu} />
      
            <label htmlFor="menuToggle" className={classes.menuIcon}>
                <TbMenuDeep className={classes.menu}/>
            </label>

            <ul className={`${classes.menuItems} ${isOpen ? classes.menuItemsVisible : ''}`}>
                <li>
                    <Image src={logo} className={classes.logo} width={100} height={100} loading="lazy" alt='logo'/>
                    <p> شبکه سرمایه انسانی پایدار </p>
                </li>
                <li onClick={() => onClickItems("about-us")}> <span> درباره ما </span> </li>
                <li onClick={() => onClickItems("overview")}> <span> راهکار ها </span> </li>
                <li onClick={() => onClickItems("customers")}> <span> مشتریان </span> </li>
                <li onClick={() => onClickItems("footer")}> <span> تماس با ما </span> </li>
            </ul>
        </nav>
    );
};

export default HamburgerMenu;