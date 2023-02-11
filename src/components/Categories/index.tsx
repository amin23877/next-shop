import styles from "./categories.module.scss";
import catPic from "../../assets/mock/cat.png";
import Image from "next/image";

export default function Categories() {
    return (
        <div className={styles.container}>
            <div className={styles.leftBanner}></div>
            <div className={styles.cats}>
                {Array.apply(null, Array(9)).map((_, i) => (
                    <div key={i} className={styles.cat}>
                        <Image src={catPic} alt="cat1" />
                        <span className={styles.title}>موبایل</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
