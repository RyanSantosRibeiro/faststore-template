// import { isMobileDevice } from "../../../utils/isMobile";
import { headerCmsProps as defaultProps } from "../../../mock/common/header-mock";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import { HeaderLogo } from "./types/header";
import { NavBarMenuProps } from "./Menu/NavBarMenu/NavBarMenu";
import { DrawerMenuProps } from "./Menu/DrawerMenu/DrawerMenu";

export interface HeaderProps {
  logo: HeaderLogo;
  navBarMenu: NavBarMenuProps;
  drawerMenu: DrawerMenuProps;
}

const Header = (props: HeaderProps) => {
  const { logo, navBarMenu, drawerMenu } = {...props, ...defaultProps};
  return (
    <>
      <HeaderMobile logo={logo} menu={drawerMenu} />
      <HeaderDesktop logo={logo} menu={navBarMenu} />
    </>
  );
};

export default Header;
