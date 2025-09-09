import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { useSession } from "src/sdk/session";
import { accountUrl, storeUrl } from "src/customizations/discovery.config";
import { getLoginUrl } from "src/customizations/src/utils/urls";
import s from "../HeaderUserActions.module.scss";

import useScrollPosition from "src/customizations/src/utils/scrollPosition";
import { headerHeight } from "src/customizations/src/constants/components";
import UserIcon from "../../../../../assets/icons/Profile.svg";

const AccountAction = () => {
  const { asPath } = useRouter();
  const { person } = useSession();

  const loginUrl = getLoginUrl(`${storeUrl}${asPath}`);
  const scrollBelowHeader = useScrollPosition(headerHeight);
  return (
    <div className={s["user-actions-account"]}>
      <Link href={loginUrl} className={s["user-actions-item"]}>
        <Image src={UserIcon} alt="Minha conta" width={24} height={24} />
        <div className={s["user-actions-account-greetings"]}>
          <span className={s["user-actions-account-greetings-text"]}>
            Bem-vindo!
          </span>
          <Link
            href={loginUrl}
            className={s["user-actions-account-greetings-link"]}
          >
            Entre ou cadastre-se
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default AccountAction;
