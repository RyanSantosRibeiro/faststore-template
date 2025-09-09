# Criar mock
Com base na imagem, identifique e separe elementos
Crie um arquivo mock na pasta src/mock/common/[componente]-mock.ts
1. Nunca utilize src como undefined. Caso utilize https://fakeimg.pl/[LARGURA]x[ALTURA]/
Crie somente o arquivo e nada mais.

Exemplo entre ~~~

~~~javascript
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
      subMenu: []
    },
  ],
};

export const headerCmsProps: HeaderProps = {
  logo: headerLogoMock,
  drawerMenu: headerMenuMock,
  navBarMenu: headerMenuMock,
};
~~~