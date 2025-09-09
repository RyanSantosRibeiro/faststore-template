import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  alignment?: "left" | "center" | "right";
}

const Title = ({ text, alignment = "left" }: TitleProps) => {
  return (
    <div
      className={`${styles["vitrine-title"]} ${
        styles[`vitrine-title--${alignment}`]
      }`}
    >
      <h2 className={styles["vitrine-title-text"]}>{text}</h2>
    </div>
  );
};

export default Title;
