import { HeaderProps } from "../../template/common/Header";

const headerLogoMock = {
  src: undefined,
  alt: "Logo",
  width: 178,
  height: 26,
};

const headerMenuMock = {
  menuItems: [
    {
      name: "Todos os departamentos",
      href: "/todos",
      highlight: false,
      image: { src: undefined, alt: "Testing" },
      subMenu: [
        {
          title: "Roupas",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
        {
          title: "Moveis",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
        {
          title: "Categoria 2",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
        {
          title: "Categoria 4",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
        {
          title: "Categoria 5",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
        {
          title: "Categoria 6",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
        {
          title: "Categoria 7",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "Camisa", href: "/teste" },
            { title: "Tenis", href: "/teste" },
            { title: "Regata", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Meia", href: "/teste" },
            { title: "Cueca", href: "/teste" },
            { title: "Ver todos", href: "/teste" },
          ],
        },
      ],
    },

    {
      name: "Roupas",
      href: "/todos",
      highlight: false,
      subMenu: [
        {
          title: "Camisa",
          href: "/categoria-teste",
          internalSubMenuItems: [],
        },
        {
          title: "Tenis",
          href: "/categoria-teste",
          internalSubMenuItems: [],
        },
        {
          title: "Categoria 4",
          href: "/categoria-teste",
          internalSubMenuItems: [],
        },
      ],
    },

    {
      name: "Lorem Ipsum",
      href: "/todos",
      highlight: false,
      subMenu: [
        {
          title: "Categoria 1",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
        {
          title: "Categoria 2",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
        {
          title: "Categoria 4",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
      ],
    },

    {
      name: "Lorem Ipsum",
      href: "/todos",
      highlight: false,
      subMenu: [],
    },

    {
      name: "Lorem Ipsum",
      href: "/todos",
      highlight: false,
      subMenu: [
        {
          title: "Categoria 1",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
      ],
    },

    {
      name: "Lorem Ipsum",
      href: "/todos",
      highlight: false,
      subMenu: [
        {
          title: "Categoria 1",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
        {
          title: "Categoria 2",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
        {
          title: "Categoria 4",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
      ],
    },

    {
      name: "Lorem Ipsum",
      href: "/todos",
      highlight: false,
      image: { src: undefined, alt: "Testing" },
      subMenu: [
        {
          title: "Categoria 1",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
        {
          title: "Categoria 2",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
        {
          title: "Categoria 4",
          href: "/categoria-teste",
          internalSubMenuItems: [
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
            { title: "teste", href: "/teste" },
          ],
        },
      ],
    },
  ],
};

export const headerCmsProps: HeaderProps = {
  logo: headerLogoMock,
  drawerMenu: headerMenuMock,
  navBarMenu: headerMenuMock,
};
