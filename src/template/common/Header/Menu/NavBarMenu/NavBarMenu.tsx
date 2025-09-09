import Link from "next/link";

import { MenuItem } from "../../types/menu";
import SubMenu from "./NavBarSubMenu";
import s from "./navbarMenu.module.scss";
import classNames from "classnames";
import useScrollPosition from "src/customizations/src/utils/scrollPosition";
import { headerHeight } from "src/customizations/src/constants/components";

export interface NavBarMenuProps {
  menuItems: MenuItem[];
}

const NavBarMenu = ({ menuItems }: NavBarMenuProps) => {
  const scrollBelowHeader = useScrollPosition(headerHeight);

  return (
    <nav>
      <ul
        className={classNames(
          s["navbar-menu"],
          scrollBelowHeader && s["navbar-menu-fixed"]
        )}
      >
        {menuItems.map((menuItem, idx) => {
          if (scrollBelowHeader && idx > 4) return;
          return (
            <li
              className={classNames(
                s["navbar-menu-item"],
                idx > 2 && s["navbar-menu-item-left"]
              )}
              key={idx}
            >
              <Link href={menuItem.href} className={s["navbar-menu-item-link"]}>
                {menuItem.name}
              </Link>
              {menuItem.subMenu?.length ? (
                <SubMenu
                  subMenuItems={menuItem.subMenu}
                  image={menuItem.image}
                />
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBarMenu;
