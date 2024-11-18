import React from 'react';
import classes from "./styles.module.scss"
import logo from "@/app/assets/global/logo-icon.svg";
import Image from 'next/image';

const Title = ({text = '', coloredText = '', color = ''}) => {
    return (
        <div className={classes.header}> 
            <Image src={logo} className={classes.logo} width={100} height={100} loading="lazy" alt='logo'/>
            <h1> <span style={{color: color}}> {coloredText} </span> {text} </h1>
        </div>
    )
}

export default Title;
