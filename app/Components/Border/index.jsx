'use client'

import Image from "next/image";
import line from "@/app/assets/global/line.png";
import classes from "./styles.module.scss"

const Border = () => {

    return (
        <div className={classes.container}>
            <Image src={line} className={classes.line} alt='dashed-border'/>
        </div>
    )
}

export default Border;