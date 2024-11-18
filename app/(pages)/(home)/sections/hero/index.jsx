import React from 'react';
import classes from "./styles.module.scss"
import blob from "@/app/assets/home/white-blob.svg"
import logo from "@/app/assets/global/logo-full.svg";
import shapes from "@/app/assets/home/shapes.svg"
import Image from 'next/image';
import { BiSolidNetworkChart } from "react-icons/bi";
import { TbSettingsShare } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";

const Hero = () => {
    
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className={classes.hero} id="hero">
            <div className={classes.blob} style={{backgroundImage: `url(${blob.src})`}}>
                <Image src={logo} className={classes.logo} width={100} height={100} alt='logo'/>
            </div>
            
            <div className={classes.shapes} style={{backgroundImage: `url(${shapes.src})`}}>
                <div className={classes.desc}>
                    <h1> شبکه سرمایه انسانی پایدار </h1>
                    <p>
                        به عنوان یکی از پیشگامان در مدیریت هوشمند منابع انسانی، با تیمی از متخصصان مجرب و پرشور، به ارائه خدماتی جامع در زمینه جذب، انتخاب، توسعه و نگهداشت نیروی انسانی می‌پردازد. ما با بهره‌گیری از فناوری‌های نوین و روش‌های خلاقانه، تلاش می‌کنیم تا نیازهای سازمان‌ها را در دنیای پویای امروز به بهترین شکل ممکن برآورده کنیم.
                    </p>
                </div>
            </div>  

            <div className={classes.boxes}>
                <div className={classes.box} onClick={() => handleScroll("overview")}>
                    <div>  <BiSolidNetworkChart className={classes.icon}/> </div>
                    <span> شبکه پایدار </span>
                </div>
                <div className={classes.box} onClick={() => handleScroll("overview")}>
                    <div>  <TbSettingsShare className={classes.icon}/> </div>
                    <span> توسعه پایدار </span>
                </div>
                <div className={classes.box} onClick={() => handleScroll("overview")}>
                    <div>  <HiOutlineUserGroup className={classes.icon}/> </div>
                    <span> ارتباطات پایدار </span>
                </div>
            </div>

        </section>
    )
}

export default Hero;
