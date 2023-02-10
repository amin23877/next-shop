import styles from "./offers.module.scss";

export default function Offers() {
    return (
        <div className={styles.container}>
            {Array.apply(null, Array(3)).map((_, i) => (
                <div key={i} className={styles.offer}></div>
            ))}
            <div className={styles.rightBanner}></div>
            {Array.apply(null, Array(6)).map((_, i) => (
                <div key={i} className={styles.offer}></div>
            ))}
        </div>
    );
}
