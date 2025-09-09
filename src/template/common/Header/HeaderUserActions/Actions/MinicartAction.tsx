import Link from "next/link";
import Image from "next/image";
import s from "../HeaderUserActions.module.scss";
import CartIcon from "../../../../../assets/icons/Cart.svg";

const MinicartAction = () => {
  // Simulando um número de itens no carrinho
  const itemsInCart = 99;

  return (
    <div className={s["user-actions-minicart"]}>
      <Link href="/cart" className={s["user-actions-item"]}>
        <Image src={CartIcon} alt="Carrinho" width={24} height={24} />
        {itemsInCart > 0 && (
          <span className={s["user-actions-badge"]}>{itemsInCart}</span>
        )}
      </Link>
    </div>
  );
};

export default MinicartAction;
