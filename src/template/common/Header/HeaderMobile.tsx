import Image from "next/image";

import { HeaderLogo } from "./types/header";
import DrawerMenu, { DrawerMenuProps } from "./Menu/DrawerMenu/DrawerMenu";
import defaultLogo from "../../../assets/icons/Logo.svg";
import s from "./header.module.scss";
import HeaderUserActions from "./HeaderUserActions/HeaderUserActions";
interface HeaderMobileProps {
  logo: HeaderLogo;
  menu: DrawerMenuProps;
}

const HeaderMobile = ({ logo, menu }: HeaderMobileProps) => {
  return (
    <header className={s["header-mobile"]}>
      <DrawerMenu menuItems={menu.menuItems} />
      <div className={s["header-mobile-logo"]}>
        <Image
          src={logo.src ?? defaultLogo}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
        />
      </div>

      <HeaderUserActions />
    </header>
  );
};

export default HeaderMobile;
