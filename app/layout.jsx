'use client'

import "./global.scss";
import "./typography.scss"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider, createTheme } from "@mui/material";
import Footer from "@/app/Components/Footer";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  typography: {
    fontFamily: 'VazirmatnFD',
  },
});


createTheme

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <head>
                <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" async></script>
                <title>شبکه سرمایه انسانی پایدار </title>
                <meta name="description" content="شبکه سرمایه انسانی پایدار، پیشگام در مدیریت هوشمند منابع انسانی، با تیمی متخصص و خلاق، خدمات جامعی در جذب، انتخاب، توسعه و نگهداشت نیروی انسانی ارائه می‌دهد. با استفاده از فناوری‌های نوین، نیازهای سازمان‌ها در دنیای پویا را به بهترین شکل برآورده می‌کنیم." />
            </head>
               
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                    <ToastContainer />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
