import Carousel from "@/components/CustomCarousel";
import Image from "next/image";

import hamzan from "../../assets/mock/hamzan.png";

import styles from "./banners.module.scss";

export default function CarouselBanners() {
    let rightBanners = [
        <div key={Math.random()} className={styles.leftBanner}></div>,
        <div key={Math.random()} className={styles.leftBanner}></div>,
        <div key={Math.random()} className={styles.leftBanner}></div>,
        <div key={Math.random()} className={styles.leftBanner}></div>,
        <div key={Math.random()} className={styles.leftBanner}></div>,
    ];
    let leftBanners = Array.apply(null, Array(3)).map((_, i) => (
        <div className={styles.rightBanner} key={i}>
            <Image src={hamzan} alt="offer" width={204} height={204} />
            <div className={styles.rightBannerDesc}>
                <span className={styles.name}>کتونی نایک شماره 2</span>
                <div className={styles.priceSection}>
                    <div className={styles.price}>
                        <span>تومان</span>
                        <span className={styles.priceValue}>۴,۳۴۳,۰۰۰</span>
                    </div>
                    <div className={styles.discountSection}>
                        <span className={styles.lastPrice}>۴,۳۴۳,۰۰۰</span>
                        <span className={styles.discount}>34%</span>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.hero}>
            <div className={styles.leftHero}>
                <Carousel items={leftBanners} count={1} loop />
            </div>
            <div className={styles.rightHero}>
                <Carousel items={rightBanners} count={1} loop />
            </div>
        </div>
    );
}
