import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

import { MenuItem } from "../../types/menu";
import HamburguerIcon from "../../../../../assets/icons/Menu.svg";
import DrawerMenuHead from "./DrawerMenuHead";
import s from "./drawerMenu.module.scss";
import DrawerMenuFoot from "./DrawerMenuFoot";
import DrawerSubMenu from "./DrawerSubMenu";

export interface DrawerMenuProps {
  menuItems: MenuItem[];
}

const DrawerMenu = ({ menuItems }: DrawerMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setMenuOpen(true)}
        className={s["drawer-menu-button"]}
      >
        <Image
          alt="Menu drawer button"
          src={HamburguerIcon}
          width={22}
          height={16}
        />
      </button>
      <div
        className={classNames(
          s["drawer-menu"],
          menuOpen ? s["drawer-menu-opened"] : s["drawer-menu-closed"]
        )}
      >
        <DrawerMenuHead setMenuOpen={setMenuOpen} />
        <ul className={s["drawer-menu-items-list"]}>
          {menuItems.map((menuItem) => (
            <li key={menuItem.href}>
              {menuItem.subMenu?.length ? (
                <DrawerSubMenu menuItem={menuItem} />
              ) : (
                <div className={s["drawer-menu-submenu-btn"]}>
                  <Link
                    href={menuItem.href}
                    className={s["drawer-menu-submenu-btn-action"]}
                  >
                    {menuItem.name}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        <DrawerMenuFoot />
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={classNames(
          s["drawer-menu-overlay"],
          menuOpen
            ? s["drawer-menu-overlay-opened"]
            : s["drawer-menu-overlay-closed"]
        )}
      ></div>
    </>
  );
};

export default DrawerMenu;
