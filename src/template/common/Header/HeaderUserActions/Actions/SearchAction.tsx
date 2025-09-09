import Image from "next/image";

import s from "../HeaderUserActions.module.scss";
import Lupa from "../../../../../assets/icons/Lupa.svg";

const SearchAction = () => {
  return (
    <button
      className={s["user-actions-search"]}
      onClick={() => {
        window.scrollTo(0, 0);
        document.getElementById("search-input")?.click();
      }}
    >
      <Image src={Lupa} alt="Botao de espandir busca" height={32} width={32} />
    </button>
  );
};

export default SearchAction;
