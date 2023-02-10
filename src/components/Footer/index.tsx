import styles from "./footer.module.scss";
import Logo from "@/assets/footer/Logo.svg";
import Call from "@/assets/footer/call.svg";
import Whats from "@/assets/footer/whatsapp.svg";
import Map from "@/assets/footer/map.svg";
import Insta from "@/assets/footer/instagram.svg";
import Send from "@/assets/footer/send.svg";
import Send2 from "@/assets/footer/send-2.svg";

export default function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.links}>
                    <span className={styles.enamad}></span>
                    <span className={styles.enamad}></span>
                </div>
                <div className={styles.links}>
                    <span className={styles.title}>ارتباط با ویتسل</span>
                    <span className={styles.contactLink}>
                        vitdell@gmail.com
                        <Send />
                    </span>
                    <span className={styles.contactLink}>
                        ۰۸۴۷۷۴۷۳۲۲
                        <Call />
                    </span>
                    <span className={styles.contactLink}>
                        خیابان ولی عصرنرسیده به سینما آفریقا
                        <Map />
                    </span>
                    <span className={styles.icons}>
                        <span className={styles.icon}>
                            <Whats />
                        </span>
                        <span className={styles.icon}>
                            <Send2 />
                        </span>
                        <span className={styles.icon}>
                            <Insta />
                        </span>
                    </span>
                </div>
                <div className={styles.links}>
                    <span className={styles.title}>محصولات ویتسل</span>
                    <span>کالای دیجیتال</span>
                    <span>سوپر مارکت</span>
                    <span>گوشی موبایل</span>
                    <span>ابزار آلات</span>
                    <span>لوازم تحریر</span>
                </div>
                <div className={styles.links}>
                    <span className={styles.title}>با ویتسل</span>
                    <span>درباره ما</span>
                    <span>تماس با ما</span>
                    <span>حریم خصوصی</span>
                    <span>شرایط بازگشت کالا</span>
                </div>
                <div className={styles.caption}>
                    <Logo />
                    <span className={styles.title}>ویتسل</span>
                    <span>صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن</span>
                </div>
            </div>
            <hr style={{ border: "1px solid #AB8BD1" }} />
            <div dir="rtl">کلیه حقوق متعلق به شرکت ویستا است. </div>
        </>
    );
}
