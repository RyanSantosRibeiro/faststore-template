# Template Faststore - Regras do Projeto

---

Esta documentação serve para nos guiar com os padrões de desenvolvimento do projeto. Antes de iniciar o desenvolvimento ou enviar um PR para validação, revise se conhece e cumpre todas as regras abaixo.

É de extrema importancia que você leia todas as regras abaixo e leia também toda a documentação interna sobre faststore https://cadastra.gitbook.io/faststore-dev para saber todos os padrões do projeto.

> **O componente de exemplo existente no projeto já possui todas as bases a serem seguidas. Recomenda-se revisá-lo para replicar nos demais componentes, incluindo chamadas às APIs utilizando GraphQL.**

**Importante! Nada pode subir para a main sem estar aprovado no PR e QA!**

**Importante! Todos os sliders devem utilizar o pacote react splide por questoes de performance e padronização, caso seja necessario alterar esse pacote removam totalmente o splide e padronizem todos os sliders com o novo pacote! DOC -> https://splidejs.com/integration/react-splide/**

## 📚 Documentação

- **Doc interna Faststore V3:** [Faststore Dev - Cadastra](https://cadastra.gitbook.io/faststore-dev)
- **Doc oficial Faststore V3:** [VTEX Faststore](https://developers.vtex.com/docs/guides/faststore)

---

## 🚀 Boas Práticas de Desenvolvimento

### 1️⃣ **Organização do Código**

- Utilize **componentização** para reaproveitamento de código.
- Siga a estrutura de arquivos e pastas do projeto.
- Utilize **sempre** TypeScript.

### 2️⃣ **Padrões de Codificação**

- Evite aninhamentos excessivos em funções e componentes.
- Utilize nomes de variáveis e funções claros e descritivos.
  
### 3️⃣ **Responsividade sem Javascript**

- Desenvolver componentes responsivos sem o uso de JavaScript para ganho de performance
- É importante sempre duplicar o componente e utilizar display: none no css com media query para fazer essa troca de componentes responsivos.

---

## 🎨 Uso de SCSS

### 1️⃣ **Organização de Variáveis**

As variáveis SCSS devem seguir um padrão estabelecido no arquivo **themes.scss** de acordo com os padrões do mockup (Figma):

```scss
--color-primary-main: #ffffff;
--color-secondary-main: #b19c5e;
--font-family-main: "Gotham", sans-serif;
```

### 2️⃣ **Nomes de Classes**

Siga o padrão de nomenclatura BEM:

```jsx
className={styles["component-example-container"]}
```

Uso no SCSS:

```scss
.component-example {
  background-color: var(--color-primary-main);

  &-container {
    max-width: var(--body-max-width);
    padding: var(--body-padding);

    @include media(">phone") {
      display: block;
    }
  }
}
```

### 3️⃣ **Breakpoints Padronizados**

Os breakpoints devem seguir a estrutura existente no setup do projeto:

```scss
$breakpoints: (
  "phone": 576px,
  "tablet": 768px,
  "notebook": 1024px,
  "desktop": 1280px,
  "wide": 1440px,
);
```

Uso no SCSS:

```scss
@include media(">phone") {
  display: block;
}
```

---

## Schemas CMS

Os componentes criados nos schemas devem ser todos traduzidos ao espanhol, devem conter titulo e uma breve descrição para o cliente identificar qual componente é. O nome em si do componente tem que ser em ingles, porem o titulo exibido no cms e todas as props devem estar em espanhol.

```json
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
}
```

---

# Desenvolvimento Mobile First

O conceito de **Mobile First** consiste em projetar e desenvolver a interface inicialmente para dispositivos móveis e, em seguida, expandir o design para telas maiores (tablets e desktops). Isso garante uma melhor experiência para usuários mobile e melhora o desempenho da aplicação.

## Diretrizes

1. **Definir o layout base para telas pequenas**

   - Criar estilos pensando primeiro em telas menores (ex: até 768px).
   - Utilizar `min-width` em media queries para expandir o design para telas maiores.

2. **Usar Flexbox e Grid para layouts responsivos**

   - Priorizar `display: flex` e `display: grid` para organizar os elementos.
   - Evitar valores fixos de largura e altura sempre que possível.

3. **Imagens e mídias adaptáveis**

   - Utilizar `next/image` para carregamento otimizado.
   - Definir `width="100%"` e `height="auto"` sempre que possível.
   - Utilizar `srcSet` para carregar imagens otimizadas para diferentes resoluções.

4. **Espaçamentos fluidos**

   - Evitar tamanhos absolutos para garantir boa adaptação a diferentes telas.

5. **Performance e carregamento progressivo**
   - Priorizar carregamento assíncrono de scripts e imagens.
   - Evitar carregamento desnecessário de assets em dispositivos móveis.

## Exemplo de CSS Mobile First

```css
.container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

/* Expandindo para telas maiores */
@include media(">phone") {
  .container {
    flex-direction: row;
    padding: 32px;
  }
}
```

## 📞 Contato

Dúvidas? Entre em contato com Emanuel Ramos (emanuel.ramos@cadastra.com) ou Gabriel Régis (gabriel.regis@cadastra.com)

