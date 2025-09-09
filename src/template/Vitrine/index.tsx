import { vitrineCmsProps as defaultProps } from "../../../mock/common/vitrine-mock";
import styles from "./Vitrine.module.scss";
import ProductCard from "./elements/ProductCard";
import Title from "./elements/Title";

export interface VitrineProps {
  title: {
    text: string;
    alignment?: "left" | "center" | "right";
  };
  products: Array<{
    image: {
      src: string;
      alt: string;
    };
    name: string;
    price: {
      listPrice: number;
      sellingPrice: number;
      installments?: {
        number: number;
        value: number;
      };
    };
    flags?: Array<string>;
    link: {
      href: string;
      title: string;
    };
  }>;
}

const Vitrine = (props: VitrineProps = defaultProps) => {
  const { title, products } = props;

  return (
    <section className={styles["vitrine-container"]}>
      <Title text={title.text} alignment={title.alignment} />
      <div className={styles["vitrine-carousel"]}>
        <div className={styles["vitrine-track"]}>
          {products.map((product, index) => (
            <div key={index} className={styles["vitrine-item"]}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <button
          className={`${styles["vitrine-arrow"]} ${styles["vitrine-arrow-prev"]}`}
          aria-label="Previous products"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          className={`${styles["vitrine-arrow"]} ${styles["vitrine-arrow-next"]}`}
          aria-label="Next products"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
};

export default Vitrine;
