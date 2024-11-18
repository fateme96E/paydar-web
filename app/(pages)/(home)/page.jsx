'use client'

import "aos/dist/aos.css";
import AOS from "aos";
import classes from "./styles.module.scss";
import Hero from "./sections/hero";
import AboutUs from "./sections/aboutUs";
import Overview from "./sections/overview";
import Customers from "./sections/customers";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        AOS.init({
            debounceDelay: 50, 
            throttleDelay: 99,
            once: true, 
        });
        AOS.refresh();
    }, []);


    return (
        <main className={classes.pageContainer}>
            <Hero />
            <AboutUs />
            <Overview />
            <Customers />
        </main>
    )
};

export default Home;