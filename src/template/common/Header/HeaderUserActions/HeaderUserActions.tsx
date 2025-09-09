import useScrollPosition from "src/customizations/src/utils/scrollPosition";
import AccountAction from "./Actions/AccountAction";
import MinicartAction from "./Actions/MinicartAction";
import WishlistAction from "./Actions/WishlistAction";
import s from "./HeaderUserActions.module.scss";
import { headerHeight } from "src/customizations/src/constants/components";
import SearchAction from "./Actions/SearchAction";

const HeaderUserActions = () => {
  const scrollBelowHeader = useScrollPosition(headerHeight);

  return (
    <div className={s["user-actions"]}>
      {scrollBelowHeader && <SearchAction />}
      <AccountAction />
      <WishlistAction />
      <MinicartAction />
    </div>
  );
};

export default HeaderUserActions;
