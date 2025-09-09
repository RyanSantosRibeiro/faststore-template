# Template Faststore - Regras do Projeto

---

Esta documentação serve para nos guiar com os padrões de desenvolvimento do projeto. Antes de iniciar o desenvolvimento ou enviar um PR para validação, revise se conhece e cumpre todas as regras abaixo.

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

## Pull Request

Crie um arquivo na pasta .cursor/pr/report.md com o questionário respondido para auxiliar na criação da PR. Analise todo contexto que foi alterado, feature desenvolvida para responder quando souber, caso não tenha resposta deixe em branco.

Gere tambem um pequeno resumo de tudo oque foi desenvolvido.

```css
Qual é o propósito do PR?

<em>Considerando o contexto, qual é o problema que vamos resolver?</em>

Como testar?

<em>Enviar workspace e tarefa do Jira</em>

Evidências

<em>Envie prints que provem que o sua task está de acordo com o que é esperado</em>

Referências (Opcional)

<em>Divulgue o conhecimento: vale a pena compartilhar algum conteúdo que você usou para criar este PR?</em>

Lista de controle

Normas de desenvolvimento

[x] Abertura de PR completando todos os campos de "Propósito, como testar e evidências" com bastante detalhes.

[ ] Garanto que o desenvolvimento já está integrado com a branch master/main.

[ ] Garanto que o desenvolvimento segue com o respectivo design.

[ ] Garanto que o desenvolvimento cumpre com a responsividade de Desktop, Tablet e Celular.

[ ] Garanto que o desenvolvimento segue com as regras de negócio estabelecidas.

Dependências

[ ] Confirmo que não existe console.log em nenhuma parte do projeto.

[ ] Confirmo que não existe nenhuma chave exposta em nenhuma parte do projeto.

As alterações neste PR foram avaliadas pelo time interno de QA?

[ ] SIM

[ ] NÃO

Justifique abaixo o motivo caso as alterações NÃO tenham sido avaliadas pelo time interno de QA:

Commits

feat: description added
```

## Analise do código
Conceitos para ser analisados:

1️⃣ Estrutura e Organização do Código
✅ O código segue o padrão de organização de arquivos e pastas?
✅ Está devidamente componentizado para reaproveitamento e manutenção?
✅ Está utilizando TypeScript corretamente, sem any desnecessários?

2️⃣ Padrões de Codificação e Qualidade
✅ O código utiliza nomes de variáveis e funções descritivos e claros?
✅ Evita aninhamentos excessivos e complexidade desnecessária?
✅ Não possui console.log ou chaves expostas?

3️⃣ Responsividade e Mobile First
✅ O código segue o princípio de Mobile First com min-width nas media queries?
✅ Utiliza Flexbox e Grid para layouts responsivos?
✅ Implementa troca de componentes com display: none para melhorar a performance?

4️⃣ Uso Correto de SCSS e Nomenclatura BEM
✅ As classes seguem a nomenclatura BEM corretamente?
✅ As variáveis SCSS estão organizadas no themes.scss e seguem o padrão definido?
✅ Os breakpoints seguem a estrutura padronizada do projeto?

5️⃣ Integração com CMS e Boas Práticas no PR
✅ Os schemas CMS estão traduzidos para espanhol conforme especificado?
✅ O PR contém todas as informações necessárias (propósito, testes, evidências)?
✅ O código passou por QA interno antes da abertura do PR?

Após analise do código, gere um relatório para .cursor/pr/codereview.md com notas referentes aos 5 conceitos passados. E uma conclusão com pontos a melhorar caso existam, ou um ok para realizar o deploy. 

## 📞 Contato

Dúvidas? Entre em contato com Emanuel Ramos (emanuel.ramos@cadastra.com) ou Gabriel Régis (gabriel.regis@cadastra.com)

