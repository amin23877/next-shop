import Image from "next/image";
import offerPic from "../../assets/mock/offer.png";
import hamzan from "../../assets/mock/hamzan.png";
import Fire from "../../assets/Fire.svg";

import styles from "./offers.module.scss";

export default function Offers() {
    return (
        <div className={styles.container}>
            <div className={styles.rightBanner}>
                <span className={styles.tag}>
                    <Fire />
                </span>
                <Image src={hamzan} alt="offer" />
                <div className={styles.rightBannerDesc}>
                    <span className={styles.bannerName}>کتونی نایک شماره 2</span>
                    <div className={styles.priceSection}>
                        <div className={styles.price}>
                            <span>تومان</span>
                            <span className={styles.bannerPrice}>۴,۳۴۳,۰۰۰</span>
                        </div>
                    </div>
                </div>
            </div>
            {Array.apply(null, Array(9)).map((_, i) => (
                <div key={i} className={styles.offer}>
                    <div className={styles.description}>
                        <span className={styles.tag}>
                            <Fire />
                        </span>
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
                    <Image src={offerPic} alt="offer" />
                </div>
            ))}
        </div>
    );
}
