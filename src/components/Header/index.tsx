import Search from "@/assets/header/Search.svg";
import Basket from "@/assets/header/Basket.svg";
import Ticket from "@/assets/header/Ticket.svg";
import Category from "@/assets/header/Category.svg";
import Fire from "@/assets/header/Fire.svg";
import ArrowDown from "@/assets/header/ArrowDown.svg";
import Logo from "@/assets/Logo.svg";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.left}>
        <div className={styles.loginBtn}>ورود / ثبت نام</div>
        <div className={styles.basket}>
          <Basket />
        </div>
        <div className={styles.search}>
          <Search />
          <input
            type="text"
            placeholder="جست و جوی محصولات ..."
            dir="rtl"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.navBtns}>
          تخفیف دار ها
          <Ticket />
        </div>
        <div className={styles.navBtns}>
          پرفروش ترین ها
          <Fire />
        </div>
        <div className={styles.navBtns}>
          <ArrowDown />
          دسته بندی ها
          <Category />
        </div>
        <Logo />
      </div>
    </div>
  );
}
