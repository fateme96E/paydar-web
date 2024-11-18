'use client'

import Image from "next/image";
import whatsapp from "@/app/assets/global/whatsapp.svg";
import instagram from "@/app/assets/global/instagram.svg";
import linkedin from "@/app/assets/global/linkedin.svg";
import classes from "./styles.module.scss"
import { MdPhoneEnabled } from "react-icons/md";
import { IoIosMailOpen } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {

    return (
        <div className={classes.footer} id="footer">
            <div className={classes.contactUs}>
                <h1> ارتباط با ما </h1>
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را  </p>
            </div>
            <div className={classes.info}>
                <div>
                    <div>
                        <MdPhoneEnabled className={classes.icon} />
                        <span> شماره تماس - 09123456789 </span>
                    </div>

                    <div>
                        <IoIosMailOpen className={classes.icon} />
                        <span> آدرس ایمیل - vaamland@gmail.com </span>
                    </div>

                    <div>
                        <IoLocationSharp className={classes.icon} />
                        <span> آدرس: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. </span>
                    </div>

                </div>
                <div>
                    <Image src={whatsapp} className={classes.icon} alt='whatsapp-icon'/>
                    <Image src={instagram} className={classes.icon} alt='instagram-icon'/>
                    <Image src={linkedin} className={classes.icon} alt='linkedin-icon'/>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;