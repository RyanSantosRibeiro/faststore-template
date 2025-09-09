import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import s from "./drawerMenu.module.scss";
import ProfileIcon from "../../../../../assets/icons/Profile_white.svg";
import CloseIcon from "../../../../../assets/icons/Close.svg";
import { accountUrl, storeUrl } from "src/customizations/discovery.config";
import { getLoginUrl } from "src/customizations/src/utils/urls";
import { useSession } from "src/sdk/session";

interface DrawerMenuHeadProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const DrawerMenuHead = ({ setMenuOpen }: DrawerMenuHeadProps) => {
  const { asPath } = useRouter();
  const loginUrl = getLoginUrl(`${storeUrl}${asPath}`);
  const { person } = useSession();
  return (
    <div className={s["drawer-menu-head"]}>
      <div className={s["drawer-menu-head-account"]}>
        <Image
          src={ProfileIcon}
          alt="profile redirect mobile"
          width={16}
          height={16}
        />
        {person ? (
          <Link
            href={accountUrl}
            className={s["drawer-menu-head-account-link"]}
          >
            Olá, {person.givenName ?? person.email}!
          </Link>
        ) : (
          <Link href={loginUrl} className={s["drawer-menu-head-account-link"]}>
            Entre ou Cadastre-se
          </Link>
        )}
      </div>
      <button
        onClick={() => setMenuOpen(false)}
        className={s["drawer-menu-head-account-close-btn"]}
      >
        <Image src={CloseIcon} alt="Icone fechar menu" width={32} height={32} />
      </button>
    </div>
  );
};

export default DrawerMenuHead;
