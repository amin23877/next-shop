import Carousel from "@/components/CustomCarousel";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import SectionTitle from "@/components/SectionTitle";

import Ticket from "@/assets/header/Ticket.svg";
import Category from "@/assets/header/Category.svg";
import Fire from "@/assets/header/Fire.svg";
import Star from "@/assets/Star.svg";

import styles from "./page.module.scss";
import Categories from "@/components/Categories";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";

export default function Home() {
    let items = [
        <div key={Math.random()} style={{ width: "100%", height: "373px", background: "blue" }}></div>,
        <div key={Math.random()} style={{ width: "100%", height: "373px", background: "green" }}></div>,
        <div key={Math.random()} style={{ width: "100%", height: "373px", background: "red" }}></div>,
        <div key={Math.random()} style={{ width: "100%", height: "373px", background: "blue" }}></div>,
        <div key={Math.random()} style={{ width: "2000px", height: "373px", background: "red" }}></div>,
    ];

    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.hero}>
                <div className={styles.leftHero}>
                    <Carousel items={items} count={1} loop />
                </div>
                <div className={styles.rightHero}>
                    <Carousel items={items} count={1} loop />
                </div>
            </div>
            <div className={styles.twoBanner}>
                <div className={styles.banner}></div>
                <div className={styles.banner}></div>
            </div>
            <SectionTitle title="تخفیف های ویتسل" icon={<Ticket />} link="google" />
            <ProductList />
            <div className={styles.twoBanner} style={{ margin: "60px 0px" }}>
                <div className={styles.banner}></div>
                <div className={styles.banner}></div>
            </div>
            <SectionTitle title="دسته بندی های محبوب" icon={<Category />} />
            <Categories />
            <SectionTitle title="پیشنهادات شگفت انگیز" icon={<Fire />} link="google" />
            <Offers />
            <SectionTitle title="پرفروش ترین محصولات" icon={<Star />} link="google" />
            <ProductList />
            <div className={styles.twoBanner} style={{ margin: "60px 0px" }}>
                <div className={styles.leftBanner}></div>
                <div className={styles.rightBanner}></div>
                <div className={styles.leftBanner}></div>
            </div>
            <div className={styles.download}>
                <div className={styles.linksContainer}>
                    <div dir="rtl"> ویتسل را همیشه همراه داشته باشید!</div>
                    <div className={styles.links}>
                        <div className={styles.link}>دانلود مستقیم </div>
                        <div className={styles.link}> دانلود از مایکت</div>
                        <div className={styles.link}>دانلود از بازار</div>
                    </div>
                    <div className={styles.linkBanner}></div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
