import React from 'react';
import classes from "./styles.module.scss";
import colors from "@/app/styles/_colors.module.scss";
import Title from "@/app/components/Title";
import CustomerCard from "./components/card";
import defaultAvatar from "@/app/assets/global/defaultAvatar.svg"

const Customers = () => {

    const list = [
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 4, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 4, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 4, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 5, profile: defaultAvatar },
        { name: "علی محمدزاده", role: "مدیر منابع انسانی دیجیکالا", score: 3, profile: defaultAvatar },
    ];

    return (
        <section className={classes.customers} data-aos="fade-up" data-aos-anchor-placement="top-center" id="customers">
            <div className={classes.header}> 
                <Title text={'ما'} coloredText={'مشتریان'} color={colors['primary-200']} />
            </div>
            <div className={classes.customers_bg}> 
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