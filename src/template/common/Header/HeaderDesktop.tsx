import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import { HeaderLogo } from "./types/header";
import NavBarMenu, { NavBarMenuProps } from "./Menu/NavBarMenu/NavBarMenu";
import s from "./header.module.scss";
import defaultLogo from "../../../assets/icons/Logo.svg";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import HeaderUserActions from "./HeaderUserActions/HeaderUserActions";
import useScrollPosition from "../../../utils/scrollPosition";
import { headerHeight } from "src/customizations/src/constants/components";
import LocationIcon from "../../../assets/icons/Location.svg";

export interface HeaderDesktopProps {
  logo: HeaderLogo;
  menu: NavBarMenuProps;
}

const HeaderDesktop = ({ logo, menu }: HeaderDesktopProps) => {
  const scrollBelowHeader = useScrollPosition(headerHeight);

  return (
    <header
      className={classNames(
        s["header-desktop"],
        scrollBelowHeader && s["header-desktop-fixed"]
      )}
    >
      {/* Barra superior roxa */}
      <div className={s["header-desktop-top"]}>
        <div className={s.container}>
          <div className={s["header-desktop-top-content"]}>
            <div className={s["header-desktop-top-left"]}>
              <Link href="/app" className={s["header-desktop-top-link"]}>
                <span className={s["header-desktop-top-link-icon"]}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 5.5V10.5C13 11.3284 12.3284 12 11.5 12H4.5C3.67157 12 3 11.3284 3 10.5V5.5C3 4.67157 3.67157 4 4.5 4H11.5C12.3284 4 13 4.67157 13 5.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 14V12"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 2H10"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Baixe o App</span>
              </Link>
              <Link href="/cartao" className={s["header-desktop-top-link"]}>
                <span className={s["header-desktop-top-link-icon"]}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="12"
                      height="8"
                      rx="1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path d="M2 7H14" stroke="white" strokeWidth="1.5" />
                  </svg>
                </span>
                <span>Cartão Mtech</span>
              </Link>
            </div>
            <div className={s["header-desktop-top-right"]}>
              <Link href="/ofertas" className={s["header-desktop-top-link"]}>
                <Image
                  src={LocationIcon}
                  alt="Localização"
                  width={16}
                  height={16}
                />
                <span>Ver ofertas para minha região</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seção central com logo, busca e ações do usuário */}
      <div className={s["header-desktop-mid"]}>
        <div className={s.container}>
          <div className={s["header-desktop-mid-content"]}>
            <Link href="/" className={s["header-desktop-logo"]}>
              <Image
                src={logo.src ?? defaultLogo}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </Link>
            <HeaderSearch id="search-input" />
            <HeaderUserActions />
          </div>
        </div>
      </div>

      {/* Menu de navegação */}
      <div className={s["header-desktop-bottom"]}>
        <div className={s.container}>
          <NavBarMenu menuItems={menu.menuItems} />
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
