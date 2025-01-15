import React from 'react';
import classes from "./styles.module.scss";
import colors from "@/app/styles/_colors.module.scss";
import Title from "@/app/Components/Title";
import CustomerCard from "./components/card";
import defaultAvatar from "@/app/assets/global/defaultAvatar.svg";
import shapes from "@/app/assets/home/shapes-2.svg";

const Customers = () => {

    const list = [
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
    ];

    return (
        <section className={classes.customers} data-aos="fade-up" data-aos-anchor-placement="top-center" id="customers">
            <div className={classes.header}> 
                <Title text={'ما'} coloredText={'مشتریان'} color={colors['primary-200']} />
            </div>
            <div className={classes.customers_bg} style={{background: `url(${shapes.src})`}}> 
                <div className={classes.list}> 
                    {list.map((customer, index) => (
                        <CustomerCard key={index} {...customer} customerKey={index} />
                    ))}
                </div>
            </div>

        </section>
)
}

export default Customers;
