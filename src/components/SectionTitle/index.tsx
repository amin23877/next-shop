import { ReactNode } from "react";
import styles from "./title.module.scss";
import ArrowLeft from "@/assets/ArrowLeft.svg";

type Props = {
    link?: string;
    title: string;
    icon: ReactNode;
};

export default function SectionTitle({ link, title, icon }: Props) {
    return (
        <div className={styles.container}>
            {link && (
                <span className={styles.link}>
                    <ArrowLeft /> مشاهده همه
                </span>
            )}
            <hr className={styles.devider} />
            <span className={styles.title}>{title}</span>
            <span className={styles.icon}>{icon}</span>
        </div>
    );
}
