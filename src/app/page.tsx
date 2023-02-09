import Carousel from "@/components/CustomCarousel";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import styles from "./page.module.scss";

export default function Home() {
  let items = [
    <div style={{ width: "100%", height: "373px", background: "blue" }}></div>,
    <div style={{ width: "100%", height: "373px", background: "green" }}></div>,
    <div style={{ width: "100%", height: "373px", background: "red" }}></div>,
    <div style={{ width: "100%", height: "373px", background: "blue" }}></div>,
    <div style={{ width: "2000px", height: "373px", background: "red" }}></div>,
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
      <ProductList />
    </main>
  );
}
