import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { MenuItem } from "../../types/menu";
import PlusIcon from "../../../../../assets/icons/Plus.svg";
import MinusIcon from "../../../../../assets/icons/Minus.svg";
import s from "./drawerMenu.module.scss";

interface DrawerSubMenuProps {
  menuItem: MenuItem;
}

const DrawerSubMenu = ({ menuItem }: DrawerSubMenuProps) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <div className={s["drawer-menu-submenu"]}>
      <div className={s["drawer-menu-submenu-btn"]}>
        <button
          className={s["drawer-menu-submenu-btn-action"]}
          onClick={() => setOpenSubMenu(!openSubMenu)}
        >
          {menuItem.name}
          {openSubMenu ? (
            <Image
              src={PlusIcon}
              alt="Abrir menu icon"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={MinusIcon}
              alt="Abrir menu icon"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
      <ul
        className={classNames(
          s["drawer-menu-submenu-items"],
          openSubMenu && s["drawer-menu-submenu-items-open"]
        )}
      >
        <Link
          href={menuItem.href}
          className={s["drawer-menu-submenu-item-link-see-all"]}
        >
          Ver Tudo
        </Link>
        {menuItem.subMenu?.map((subMenuItem) => (
          <li className={s["drawer-menu-submenu-item"]} key={subMenuItem.href}>
            <Link
              href={subMenuItem.href}
              className={s["drawer-menu-submenu-item-link"]}
            >
              {subMenuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerSubMenu;
