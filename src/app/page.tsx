import Ticket from "@/assets/header/Ticket.svg";
import Category from "@/assets/header/Category.svg";
import Fire from "@/assets/header/Fire.svg";
import Star from "@/assets/Star.svg";
import Logo from "@/assets/header/Logo.svg";
import myket from "@/assets/download/Myket.png";
import android from "@/assets/download/Android.png";
import bazar from "@/assets/download/Bazar.png";
import mobile from "@/assets/download/Mobile.png";
import banner3 from "@/assets/mock/banner3.png";

import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import SectionTitle from "@/components/SectionTitle";
import Categories from "@/components/Categories";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";
import CarouselBanners from "@/components/CarouselBanners";

import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.container}>
            <div className={styles.logo}>
                <Logo />
                <span className={styles.typo}>ویتسل</span>
            </div>
            <Header />
            <CarouselBanners />
            <div className={styles.twoBanner1}>
                <div className={styles.banner2}></div>
                <div className={styles.banner1}></div>
            </div>
            <SectionTitle title="تخفیف های ویتسل" icon={<Ticket />} link="google" />
            <ProductList />
            <div className={styles.twoBanner2}>
                <div className={styles.banner1}></div>
                <div className={styles.banner2}></div>
            </div>
            <SectionTitle title="دسته بندی های محبوب" icon={<Category />} />
            <Categories />
            <SectionTitle title="پیشنهادات شگفت انگیز" icon={<Fire />} link="google" />
            <Offers />
            <SectionTitle title="پرفروش ترین محصولات" icon={<Star />} link="google" />
            <ProductList />
            <div className={styles.threeBanner}>
                <div className={styles.rightBanner}></div>
                <div className={styles.leftBanner1}></div>
                <div className={styles.leftBanner2}></div>
            </div>
            <div className={styles.download}>
                <div className={styles.linksContainer}>
                    <div dir="rtl" className={styles.title}>
                        ویتسل را همیشه همراه داشته باشید!
                    </div>
                    <div className={styles.links}>
                        <div className={styles.link}>
                            دانلود از بازار
                            <Image src={bazar} alt="bazar" />
                        </div>
                        <div className={styles.link}>
                            دانلود از مایکت
                            <Image src={myket} alt="myket" />
                        </div>
                        <div className={styles.link}>
                            دانلود مستقیم
                            <Image src={android} alt="direct" />
                        </div>
                    </div>
                    <div className={styles.linkBanner}>
                        <Image src={mobile} alt="mobile" />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
