import { CategoryCardsProps } from "../../template/CategoryCards";

const categoryCardsMock = [
  {
    image: {
      src: "https://fakeimg.pl/389x360",
      alt: "Alfaiataria e mais apostas para elas",
    },
    title: "NOVIDADES AK",
    description: "Alfaiataria e mais apostas para elas",
    buttonText: "Comprar",
  },
  {
    image: {
      src: "https://fakeimg.pl/389x360",
      alt: "Tudo para arrasar na nova temporada",
    },
    title: "APOSTAS PARA ELES",
    description: "Tudo para arrasar na nova temporada",
    buttonText: "Comprar",
  },
  {
    image: {
      src: "https://fakeimg.pl/389x360",
      alt: "Opções lindas para a garotada",
    },
    title: "JEANS DO MOMENTO",
    description: "Opções lindas para a garotada",
    buttonText: "Comprar",
  },
];

export const categoryCardsCmsProps: CategoryCardsProps = {
  cards: categoryCardsMock,
};
