import { VitrineProps } from "../../template/Vitrine";

const vitrineMock = {
  title: {
    text: "Produtos em Destaque",
    alignment: "left" as const,
  },
  products: [
    {
      image: {
        src: "https://fakeimg.pl/400x400",
        alt: "Produto 1",
      },
      name: "Camisa Casual Moderna Slim Fit",
      price: {
        listPrice: 199.9,
        sellingPrice: 149.9,
        installments: {
          number: 3,
          value: 49.97,
        },
      },
      flags: ["NOVO", "-25%"],
      link: {
        href: "/produto/camisa-casual",
        title: "Ver Camisa Casual",
      },
    },
    {
      image: {
        src: "https://fakeimg.pl/400x400",
        alt: "Produto 2",
      },
      name: "Calça Jeans Skinny Premium",
      price: {
        listPrice: 299.9,
        sellingPrice: 249.9,
        installments: {
          number: 5,
          value: 49.98,
        },
      },
      flags: ["DESTAQUE"],
      link: {
        href: "/produto/calca-jeans",
        title: "Ver Calça Jeans",
      },
    },
    {
      image: {
        src: "https://fakeimg.pl/400x400",
        alt: "Produto 3",
      },
      name: "Tênis Esportivo Performance",
      price: {
        listPrice: 399.9,
        sellingPrice: 299.9,
        installments: {
          number: 6,
          value: 49.98,
        },
      },
      flags: ["OFERTA", "-25%"],
      link: {
        href: "/produto/tenis-esportivo",
        title: "Ver Tênis Esportivo",
      },
    },
    {
      image: {
        src: "https://fakeimg.pl/400x400",
        alt: "Produto 4",
      },
      name: "Jaqueta Corta Vento Impermeável",
      price: {
        listPrice: 259.9,
        sellingPrice: 259.9,
      },
      link: {
        href: "/produto/jaqueta-corta-vento",
        title: "Ver Jaqueta",
      },
    },
  ],
};

export const vitrineCmsProps: VitrineProps = {
  title: vitrineMock.title,
  products: vitrineMock.products,
};
