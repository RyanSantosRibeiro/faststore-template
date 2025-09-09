import { tipBarCmsProps as defaultProps } from "../../mock/common/tipbar-mock";
import styles from "./TipBar.module.scss";

export interface TipBarItemProps {
  icon: {
    src: string;
    alt: string;
  };
  text: string;
}

export interface TipBarProps {
  items?: TipBarItemProps[];
}

const TipBar = (props: TipBarProps) => {
  const { items } = { ...props, ...defaultProps };

  return (
    <div className={styles["tipbar-container"]}>
      {items?.map((item: TipBarItemProps, index: number) => (
        <div key={index} className={styles["tipbar-item"]}>
          <img
            src={item.icon.src}
            alt={item.icon.alt}
            className={styles["tipbar-icon"]}
          />
          <span className={styles["tipbar-text"]}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TipBar;
