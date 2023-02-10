import styles from "./categories.module.scss";

export default function Categories() {
    return (
        <div className={styles.container}>
            <div className={styles.leftBanner}></div>
            <div className={styles.cats}>
                {Array.apply(null, Array(9)).map((_, i) => (
                    <div key={i} className={styles.cat}></div>
                ))}
            </div>
        </div>
    );
}
