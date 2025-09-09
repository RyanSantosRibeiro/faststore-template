# Criar Component
Caso o componente já exista , basta atualizá-lo
1.Crie os arquivos inciais para o desenvolvimento de uma nova sessão
2.Crie uma pasta com o nome da sessão na pasta src/template
3.Crie um arquivo chamado index.tsx apenas para layout 
3.1 O arquivo index.tsx sua função deve organizar os elementos com espaçamentos internos, cores de fundo, container padrão e somente isso.
3.2 O arquivo deve conter apenas o básico para organizar os elementos de acordo com o layout
4.Crie um arquivo chamado [NOME_DO_COMPONENTE].module.scss
4.1 Siga as orientações em createStyles.md
5.Importe o respectivo mock ([NOME_DO_COMPONENTE]-mock.ts) e utilize como dados Default, caso não venha nenhum pelas props.
6.Crie elementos
6.1 Identifique no layout elementos menores que podem compor o componente e podem ser refatorados (Como botões padrão, Titulos padrões icones de login, cards, icones de compra, icones em geral, menus, imagens em linha com titulo e outros)
6.2 Crie uma pasta chamada elements no mesmo nivel do index.tsx
6.3 Crie um arquivo [NOME_DO_ELEMENTO]/index.tsx
6.4 Crie um arquivo [NOME_DO_ELEMENTO]/[NOME_DO_ELEMENTO].module.scss
6.5 Antes de criar qualquer elemento, verifique na documentação da vtex @FastStore caso precise de mais informações sobre pegar informações do contexto do produto, informações sobre promoções, sobre páginas de categorias e etc
6.6 Alguns elementos são compartilhados em toda loja, então antes de criar um elementos, verifique na pasta de src/template/commom se já existe um elemento que satisfaz o layout e importe o elemento. Por exemplo, uma vitrine (ou Shelf - um slider de cards de produto) é usado igualmente  em todo o site, então import da pasta src/template/commom. Caso o elemento realmente não exista, crie um com as orientações acima.
6.7 Para banners e images grandes, utilize o src padrão como https://fakeimg.pl/[LARGURA]x[ALTURA]/
6.8 Para icones, siga as instruções de ./createIcons.md
8. Crie o import no arquivo template/index.tsx respectivo do novo componente: export { default as ComponentExample } from "./ComponentExample";
9. Adicione o schema do componente no arquivo cms/faststore/sections.json assim como o exemplo
Não faça nada a mais.

Exemplo entre ~~~

## index.tsx - Componente
~~~javascript
import useCollection from "../../hooks/useCollection";
import styles from "./ComponentExample.module.scss";
import { ComponentExampleProps as defaultProps } from "../../../mock/common/ComponentExampleProps-mock";

interface ComponentExampleProps {
  collectionId: string;
}

const ComponentExample = (props: ComponentExampleProps) => {
  const { collectionId } = {...props, ...defaultProps};
  return (
    <div className={styles["component-example-container"]}>
      <TitleExample />
      <CollectionId collectionId={collectionId} />
    </div>
  );
};

export default ComponentExample;
~~~

## elements/title/index.tsx
scss: components/title/title.module.scss
~~~javascript
import styles from "./title.module.scss";

interface titleProps {
  collectionId: string;
}

const TitleExample = ({ title }: titleProps) => {
  return <h1 className={styles["component-example-title"]}>{title}</h1>
};

export default ComponentExample;
~~~

## elements/collectionId/index.tsx
scss: components/title/title.module.scss
~~~javascript
import useCollection from "../../hooks/useCollection";
import styles from "./CollectionId.module.scss";

interface CollectionIdProps {
  collectionId: string;
}

const CollectionId = ({ collectionId }: CollectionIdProps) => {
  const { collectionProductName } = useCollection({ collectionId });
  console.log({ collectionProductName });
  return (
    <h2 className={styles["component-example-query-response"]}>
        Test Query response: {collectionProductName}
    </h2>
  );
};

export default CollectionId;
~~~

## Outro exemplo de componente
~~~javascript
import { tipBarCmsProps as defaultProps } from "../../mock/common/tipbar-mock";
import styles from "./TipBar.module.scss";

type TipBarItemProps = {
  icon: {
    src: string | undefined;
    alt: string;
  };
  text: string;
}

export interface TipBarProps {
  items?: TipBarItemProps[] 
}

const TipBar = (props: TipBarProps) => {
  const { items } = {...props, ...defaultProps};

  return (
    <div className={styles["tipbar-container"]}>
      {items?.map((item: TipBarItemProps, index: number) => (
        <div key={index} className={styles["tipbar-item"]}>
          <img
            src={item.icon.src}
            alt={item.icon.alt}
            className={styles["tipbar-icon"]}
          />
          <span className={styles["tipbar-text"]}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TipBar;
~~~

## schema
~~~json
{
    "name": "ComponentExample",
    "schema": {
      "title": "Componente de pruebas",
      "description": "Este es un componente para ser utilizado de base",
      "type": "object",
      "required": [],
      "properties": {
        "collectionId": {
          "title": "Id de la collecion",
          "type": "string"
        }
      }
    }
  },
~~~