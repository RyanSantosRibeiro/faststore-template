import styles from "./ProductCard.module.scss";

interface ProductCardProps {
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
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const ProductCard = ({ image, name, price, flags, link }: ProductCardProps) => {
  return (
    <a href={link.href} title={link.title} className={styles["product-card"]}>
      <div className={styles["product-card-image-container"]}>
        <img
          src={image.src}
          alt={image.alt}
          className={styles["product-card-image"]}
          loading="lazy"
        />
        {flags && flags.length > 0 && (
          <div className={styles["product-card-flags"]}>
            {flags.map((flag, index) => (
              <span key={index} className={styles["product-card-flag"]}>
                {flag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles["product-card-info"]}>
        <h3 className={styles["product-card-name"]}>{name}</h3>

        <div className={styles["product-card-prices"]}>
          {price.listPrice > price.sellingPrice && (
            <span className={styles["product-card-list-price"]}>
              {formatPrice(price.listPrice)}
            </span>
          )}
          <span className={styles["product-card-selling-price"]}>
            {formatPrice(price.sellingPrice)}
          </span>
          {price.installments && (
            <span className={styles["product-card-installments"]}>
              {price.installments.number}x de{" "}
              {formatPrice(price.installments.value)}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
