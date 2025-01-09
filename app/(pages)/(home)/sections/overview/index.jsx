import React from 'react';
import classes from "./styles.module.scss";
import colors from "@/app/styles/_colors.module.scss";
import Title from "@/app/Components/Title";
import { BiSolidNetworkChart } from "react-icons/bi";
import { TbSettingsShare } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";

const Overview = () => {

    return (
        <section className={classes.overview} data-aos="fade-up" data-aos-anchor-placement="top-center"  id="overview">
            <div className={classes.header}> 
                <Title text={'پایدار'} coloredText={'راهکارهای'} color={colors['secondary-100']} />
            </div>
            <div className={classes.boxes}> 
                <div className={classes.box}> 
                    <div>  <BiSolidNetworkChart className={classes.icon}/> </div> 
                    <h2> شبکه پایدار </h2>
                    <span> راهکار های عملیات محور </span>
                    <p> با تمرکز بر جذب و توسعه نیروهای مدیر یتی و متخصص، این دپارتمان به تأمین نیروی انسانی مورد نیاز سازمانها در سطوح کلیدی کمک می‌کند و تضمین میکند که سازمانها از رهبری و مدیریت قوی برخوردار باشند . </p>
                </div>
                <div className={classes.box}>  
                    <div>  <HiOutlineUserGroup className={classes.icon}/> </div>
                    <h2> ارتباطات پایدار </h2>
                    <span> راهکار های اجتماع محور </span>
                    <p> با توسعه و پیاده‌سازی خدمات نوآورانه در مدیریت منابع انسانی، این دپارتمان به بهینه‌سازی فرآیندهای منابع انسانی در سازمان‌ها کمک می‌کند، از جمله جذب، نگهداشت و توسعه نیروی انسانی، تا سازمان‌ها بتوانند با چالش‌های روزافزون دنیای کسب‌وکار روبرو شوند. </p>
                </div>
                <div className={classes.box}>  
                    <div>  <TbSettingsShare className={classes.icon}/> </div>
                    <h2> توسعه پایدار </h2>
                    <span> راهکار های فناوری محور </span>
                    <p> با تمرکز بر توسعه شبکه‌سازی و ایجاد ارتباطات مؤثر، این دپارتمان به تقویت تعاملات حرفه‌ای و تبادل دانش بین افراد و سازمان‌ها می‌پردازد و به ایجاد یک کامیونیتی پویا و کارآمد در حوزه منابع انسانی کمک می‌کند. </p>
                </div>
            </div>

        </section>
)
}

export default Overview;
