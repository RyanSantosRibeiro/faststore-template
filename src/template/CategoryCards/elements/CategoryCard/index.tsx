import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  buttonText: string;
}

const CategoryCard = ({
  image,
  title,
  description,
  buttonText,
}: CategoryCardProps) => {
  return (
    <div className={styles["category-card"]}>
      <img
        src={image.src}
        alt={image.alt}
        className={styles["category-card-image"]}
      />
      <div className={styles["category-card-content"]}>
        <h3 className={styles["category-card-title"]}>{title}</h3>
        <p className={styles["category-card-description"]}>{description}</p>
        <button className={styles["category-card-button"]}>{buttonText}</button>
      </div>
    </div>
  );
};

export default CategoryCard;
