import useCollection from "../../hooks/useCollection";
import BannerPequeno from "../BannerPequeno";
import ProductList from "../common/ProductList/ProductList";
import TipBar from "../TipBar";
import Header from "../common/Header";
import styles from "./ComponentExample.module.scss";
import { headerCmsProps } from "../../mock/common/header-mock";
import { tipBarCmsProps } from "../../mock/common/tipbar-mock";
interface ComponentExampleProps {
  collectionId: string;
}

const ComponentExample = ({ collectionId = '578' }: ComponentExampleProps) => {
  const { collectionProductName } = useCollection({ collectionId });
  console.log({ collectionProductName });
  return (
    <div className={styles["component-example"]}>
      <Header {...headerCmsProps}/>
      <h1 className={styles["component-example-title"]}>Component Example</h1>
      <h2 className={styles["component-example-query-response"]}>
        Test Query response: {collectionProductName}
      </h2>
      <BannerPequeno />
      <TipBar items={tipBarCmsProps.items} />
    </div>
  );
};

export default ComponentExample;
