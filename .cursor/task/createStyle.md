# Crie estilo

Ao gerar o arquivo de estilo, siga rigorosamente as diretrizes abaixo para garantir consistência e aderência ao layout:

1. Estrutura de Container e Content

- Todo componente deve ter uma estrutura base com container e content:

```scss
.component-container {
  width: 100%;
}

.component-content {
  max-width: var(--container-width, 1200px);
  margin: 0 auto;
  padding: 0 var(--padding-container, 1rem);
}
```

2. Backgrounds e Limites Visuais

- Se o background no layout está limitado a 1200px → aplicar no content
- Se o background no layout é full-width → aplicar no container
- Nunca aplicar backgrounds que ultrapassem os limites definidos no layout

3. Uso de Variáveis e Theming

- Sempre utilize as variáveis definidas em src/themes/custom-theme.scss
- Para cores: var(--color-[categoria]-[intensidade])
- Para espaçamentos: var(--spacing-[tamanho])
- Para larguras de container: var(--container-width)
- Para paddings laterais: var(--padding-container)
- Caso precise de valores que não estejam definidos, crie uma variant

4. Responsividade e Espaçamentos

- Mantenha os espaçamentos proporcionais ao layout
- Padding lateral do content deve usar var(--padding-container)
- Gaps e espaçamentos internos devem usar var(--spacing-[tamanho])
- Em mobile, considere reduzir espaçamentos proporcionalmente

5. Precauções com Larguras

- Evite min-width: max-content, pois pode quebrar o layout
- Use width: 100% apenas quando necessário
- Prefira flex ou grid para distribuição de espaço
- Respeite sempre os limites do container (1200px)

6. Estrutura de Código

```scss
// Estrutura base
.component-container {
  width: 100%;
  padding: var(--spacing-[tamanho]) 0;
}

.component-content {
  max-width: var(--container-width, 1200px);
  margin: 0 auto;
  padding: 0 var(--padding-container, 1rem);
  // Background apenas se limitado a 1200px no layout
}

// Elementos internos
.component-element {
  // Use variáveis para todos os valores
  padding: var(--spacing-[tamanho]);
  color: var(--color-[categoria]-[intensidade]);
  gap: var(--spacing-[tamanho]);
}
```

7. Mobile First

- Comece com o layout mobile
- Use media queries para ajustes em desktop
- Mantenha a consistência dos espaçamentos
- Considere scroll horizontal apenas quando especificado no layout

8. Verificação Final

- O componente tem exatamente a mesma largura do layout?
- Os backgrounds respeitam os limites (full-width ou 1200px)?
- Todos os espaçamentos usam variáveis?
- A estrutura container/content está correta?
