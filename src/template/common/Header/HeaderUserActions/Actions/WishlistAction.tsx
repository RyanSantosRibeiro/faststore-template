import Link from "next/link";
import Image from "next/image";
import s from "../HeaderUserActions.module.scss";
import HeartIcon from "../../../../../assets/icons/Heart.svg";

const WishlistAction = () => {
  return (
    <Link href="/wishlist" className={s["user-actions-item"]}>
      <Image src={HeartIcon} alt="Lista de desejos" width={24} height={24} />
    </Link>
  );
};

export default WishlistAction;
