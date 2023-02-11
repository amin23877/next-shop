"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Carousel from "../CustomCarousel";

import shoePic from "../../assets/mock/shoe.png";

import styles from "./prodList.module.scss";

export default function ProductList() {
    const ref = useRef<HTMLDivElement>(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth);
        }
    }, []);

    let items = Array.apply(null, Array(20)).map((_, i) => (
        <div key={i} className={styles.product}>
            <Image src={shoePic} alt="shoe" />
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
    ));

    return (
        <div ref={ref} className={styles.container}>
            <Carousel items={items} count={width / 190} />
        </div>
    );
}
