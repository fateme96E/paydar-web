import React from 'react';
import classes from "./styles.module.scss";
import colors from "@/app/styles/_colors.module.scss";
import aboutUsImg from "@/app/assets/home/about-us.svg";
import Border from "@/app/Components/Border";
import Title from "@/app/Components/Title";
import Image from 'next/image';

const AboutUs = () => {

    return (
        <>
            <section className={classes.aboutUs} data-aos="fade-up" data-aos-anchor-placement="top-center" id="about-us" >
                <Image src={aboutUsImg} className={classes.img} width={100} height={100} loading="lazy" alt='about-us'/>
                <div className={classes.header}> 
                    <Title text={'ما'} coloredText={'درباره'} color={colors['primary-200']} />
                </div>
                <div className={classes.desc}> 
                    <p> <span> شبکه سرمایه انسانی </span> پایدار به عنوان یکی از پیشگامان در عرصه مدیریت هوشمند منابع انسانی، با تکیه بر تجربه و دانش فنی عمیق و بهره‌گیری از فناوری‌های پیشرفته، به ارائه راهکارهای نوآورانه و مؤثر در حوزه جذب، توسعه و نگهداشت نیروی انسانی می‌پردازد. ما با تیمی از متخصصان مجرب و متعهد، خدمات جامعی را برای کمک به سازمان‌ها در دستیابی به اهداف استراتژیکشان فراهم می‌کنیم. </p>
                    <p> <span> شبکه سرمایه انسانی پایدار </span> در زمانی شکل گرفت که روش‌های سنتی جذب و استخدام دیگر پاسخگوی نیازهای پیچیده و متغیر سازمان‌ها نبودند. در مواجهه با این چالش‌ها، گروهی از متخصصان با تجربه در حوزه منابع انسانی، با درک عمیق از نیازهای سازمان‌ها و کارجویان، تصمیم به ایجاد راه‌حل‌های هوشمند و بومی گرفتند و این شبکه را تأسیس کردند. </p>
                    <p> هدف ما ایجاد بستری <span> پایدار و هوشمند </span> است که به سازمان‌ها کمک می‌کند تا بهترین استعدادها را جذب و توسعه دهند و از توانایی‌های آنان بهره‌برداری کنند. ما معتقدیم که هر فرد باید بتواند به پتانسیل کامل خود دست یابد و سازمان‌ها نیز از این طریق به موفقیت‌های ماندگار دست یابند. چشم‌انداز ما تبدیل شدن به مرجع اصلی در حوزه خدمات منابع انسانی است، جایی که نوآوری و تعهد به کیفیت، آینده‌ای پایدار و موفق را برای تمامی ذینفعان رقم می‌زند. </p>
                </div>

            </section>
            <Border />
        </>
    )
}

export default AboutUs;
