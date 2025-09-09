import { categoryCardsCmsProps as defaultProps } from "../../mock/common/categorycards-mock";
import styles from "./CategoryCards.module.scss";
import CategoryCard from "./elements/CategoryCard";

export interface CategoryCardsProps {
  cards: Array<{
    image: {
      src: string;
      alt: string;
    };
    title: string;
    description: string;
    buttonText: string;
  }>;
}

const CategoryCards = (props: CategoryCardsProps = defaultProps) => {
  const { cards } = props;

  return (
    <section className={styles["category-cards-container"]}>
      <div className={styles["category-cards-grid"]}>
        {cards.map((card, index) => (
          <CategoryCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
