export interface MenuItem {
  name: string;
  href: string;
  highlight: boolean;
  image?: MenuItemImage;
  subMenu?: SubMenuItem[];
}
export interface MenuItemImage {
  src?: string;
  alt: string;
}
export interface SubMenuItem {
  title: string;
  href: string;
  internalSubMenuItems: InternalSubMenuItem[];
}
export interface InternalSubMenuItem {
  title: string;
  href: string;
}
