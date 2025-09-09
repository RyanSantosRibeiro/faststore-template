import Link from "next/link";
import Image from "next/image";

import {
  InternalSubMenuItem,
  MenuItemImage,
  SubMenuItem,
} from "../../types/menu";
import s from "./navbarMenu.module.scss";
import mockMenuImage from "../../../../../assets/images/menu-item-img.jpg";

export interface InternalSubMenuProps {
  internalSubMenu: InternalSubMenuItem[];
}
export interface SubMenuProps {
  subMenuItems: SubMenuItem[];
  image?: MenuItemImage;
}

const NavBarInternalSubMenu = ({ internalSubMenu }: InternalSubMenuProps) => {
  return (
    <ul className={s["sub-menu-list-item-internal-list"]}>
      {internalSubMenu.map((internalSubMenuItem) => (
        <li
          key={internalSubMenuItem.href}
          className={s["sub-menu-list-item-internal-list-item"]}
        >
          <Link
            href={internalSubMenuItem.href}
            className={s["sub-menu-list-item-internal-list-link"]}
          >
            {internalSubMenuItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NavBarSubMenu = ({ subMenuItems, image }: SubMenuProps) => {
  return (
    <div className={s["sub-menu"]}>
      <ul className={s["sub-menu-list"]}>
        {subMenuItems.map((subMenuItem) => (
          <li className={s["sub-menu-list-item"]} key={subMenuItem.href}>
            <Link
              href={subMenuItem.href}
              className={s["sub-menu-list-item-link"]}
            >
              {subMenuItem.title}
            </Link>
            {subMenuItem.internalSubMenuItems && (
              <NavBarInternalSubMenu
                internalSubMenu={subMenuItem.internalSubMenuItems}
              />
            )}
          </li>
        ))}
      </ul>
      {image && (
        <Image
          width={464}
          height={450}
          src={image.src ?? mockMenuImage}
          alt={image.alt}
        />
      )}
    </div>
  );
};

export default NavBarSubMenu;
