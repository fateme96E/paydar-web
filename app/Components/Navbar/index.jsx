'use client'

import classes from "./styles.module.scss"
import logo from "../../assets/global/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { GetToken, RemoveToken } from "@/app/Api/HandleToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    if(GetToken())
      setIsLogin(true)
  })

  const handleLogout = () => {
    RemoveToken()
    setIsLogin(false)
    router.push('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Image alt="logo" className={classes.logoImage} src={logo}></Image>
        <h1>فروشگاه پاندی پت</h1>
      </div>
        <div className={classes.links}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/aboutUs">درباره کارگشا</Link>
          <Link href="/userPanel/academy">ابزار های  کارگشا</Link>
        </div>
        <div className={classes.buttonContainer}>
          {!isLogin &&
          <Link href='/login'>
            <Button sx={{direction: 'ltr', width: '8vw', height: '3vw', border: '1px solid teal', borderRadius: '0.6vw', fontWeight: '600', color: 'teal',  fontSize: '1.1vw', minWidth: '0px'}} variant="outlined" startIcon={<ArrowCircleLeftOutlinedIcon style={{fontSize: '1.6vw'}} />}>
              ورود
            </Button>
          </Link>
          }
          {isLogin &&
          <>
            <Link href='/userPanel/profile'>
              <Button sx={{direction: 'ltr', width: '8vw', height: '3vw', border: '1px solid teal', borderRadius: '0.6vw', fontWeight: '600', color: 'teal',  fontSize: '1.1vw', minWidth: '0px'}} variant="outlined">
                داشبورد
              </Button>
            </Link>
            <Button 
            onClick={handleLogout} 
            sx={{direction: 'ltr', width: '8vw', height: '3vw', border: '1px solid teal', borderRadius: '0.6vw', fontWeight: '600', color: 'teal',  fontSize: '1.1vw', minWidth: '0px'}} variant="outlined"
            >
              خروج
            </Button>
          </>
          }
        </div>
    </div>
  )
}

export default Navbar;