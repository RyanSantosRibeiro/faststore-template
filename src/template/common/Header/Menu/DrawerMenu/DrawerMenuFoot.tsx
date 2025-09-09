import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import s from "./drawerMenu.module.scss";
import OrdersIcon from "../../../../../assets/icons/Orders.svg";
import TelephoneIcon from "../../../../../assets/icons/Telephone.svg";
import { storeUrl } from "src/customizations/discovery.config";
import { getLoginUrl } from "src/customizations/src/utils/urls";

const DrawerMenuFoot = () => {
  const { asPath } = useRouter();
  const loginUrl = getLoginUrl(`${storeUrl}${asPath}`);

  return (
    <div className={s["drawer-menu-foot"]}>
      <div className={s["drawer-menu-foot-action"]}>
        <Image
          src={OrdersIcon}
          alt="profile redirect mobile"
          width={16}
          height={16}
        />
        <Link href={loginUrl} className={s["drawer-menu-foot-action-link"]}>
          Meus Pedidos
        </Link>
      </div>
      <div className={s["drawer-menu-foot-action"]}>
        <Image
          src={TelephoneIcon}
          alt="profile redirect mobile"
          width={16}
          height={16}
        />
        <Link href={loginUrl} className={s["drawer-menu-foot-action-link"]}>
          Atendimento
        </Link>
      </div>
    </div>
  );
};

export default DrawerMenuFoot;
