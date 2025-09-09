# Checklist de Análise de Layout

## 1. Análise de Backgrounds

- O background tem margem em relação às bordas do layout?
- Qual é a largura exata do background em relação ao container?
- O background é realmente full-width ou tem espaçamentos laterais?
- Existe algum padding interno entre o background e o conteúdo?

## 2. Medidas e Espaçamentos

- Meça os espaçamentos laterais (margins/paddings) usando a ferramenta de design
- Meça os gaps entre elementos
- Verifique o padding interno dos elementos
- Compare as medidas com as variáveis disponíveis no tema
- Identifique se os espaçamentos são proporcionais ao grid do layout

## 3. Tipografia e Comportamento do Texto

- Qual o peso exato da fonte (font-weight)?
- Qual o tamanho exato do texto?
- Qual a cor exata do texto (usar color picker se necessário)?
- Existe algum tratamento especial (line-height, letter-spacing)?
- Como o texto se comporta em diferentes tamanhos de tela?
- O texto deve quebrar em múltiplas linhas ou permanecer em uma única linha?
- Existe algum limite de largura para o texto?
- Como o texto se alinha com outros elementos (ícones, imagens)?
- O texto tem algum comportamento especial em mobile (scroll horizontal, quebra de linha)?
- Existe algum tratamento especial para textos longos vs curtos?

## 4. Ícones e Imagens

- Meça as dimensões exatas dos ícones
- Verifique se o ícone tem algum espaçamento próprio
- Compare o tamanho do ícone em relação aos elementos ao redor
- Observe se existe algum tratamento especial (cor, opacidade)
- Verificar se há instruções específicas sobre o uso de imagens (ex: fakeimg.pl)
- Confirmar se há regras sobre valores undefined
- Como os ícones se comportam em diferentes tamanhos de tela?
- Existe algum alinhamento especial entre ícones e texto?

## 5. Cores

- Use color picker para pegar a cor exata do background
- Compare com as variáveis de cores disponíveis
- Verifique se existem variações de opacidade
- Observe se existem diferentes estados (hover, active)

## 6. Estrutura do Container

- O container tem largura máxima definida?
- Existem margens laterais além do container?
- Como o conteúdo se comporta dentro do container?
- Existe algum padding adicional no container?
- Como o container se adapta em diferentes tamanhos de tela?

## 7. Responsividade

- Como os espaçamentos se comportam em diferentes breakpoints?
- O layout mantém as proporções em diferentes tamanhos?
- Existem adaptações específicas para mobile?
- Como os elementos se reorganizam em diferentes breakpoints?
- Existe algum comportamento especial de scroll em mobile?
- Como os elementos se comportam em diferentes orientações (portrait/landscape)?

## 8. Elementos de Interface

- Existem estados de hover?
- Existem transições ou animações?
- Como os elementos interagem entre si?
- Existem variações de estado (disabled, active, etc)?
- Como os elementos se comportam em diferentes estados?

## 9. Verificação Final

- Comparar lado a lado com o layout
- Verificar pixel por pixel usando ferramenta de design
- Confirmar todas as medidas e espaçamentos
- Validar em diferentes resoluções
- Testar com diferentes tamanhos de conteúdo
- Verificar comportamento em diferentes dispositivos

## 10. Documentação

- Anotar medidas específicas que não seguem o padrão
- Documentar decisões de implementação
- Registrar variações de breakpoint
- Listar possíveis melhorias ou ajustes futuros
- Documentar comportamentos especiais de elementos

## 11. Instruções Específicas da Task

- Ler atentamente todas as instruções da task
- Identificar regras específicas sobre dados e valores
- Verificar se há restrições de uso (ex: não usar undefined)
- Confirmar se há padrões obrigatórios (ex: usar fakeimg.pl)
- Listar todas as exceções às regras padrão

## 12. Dados e Mock

- Verificar se há instruções específicas sobre dados de exemplo
- Confirmar se há regras sobre valores padrão
- Validar se os dados seguem o formato correto
- Garantir que não há suposições incorretas sobre dados
- Verificar se há restrições de tipos (ex: string vs undefined)
- Testar com diferentes tamanhos de conteúdo

## 13. Prevenção de Erros Comuns

- Evitar seguir padrões comuns de desenvolvimento sem verificar a task
- Não assumir valores padrão sem confirmação
- Verificar se há exceções às práticas padrão
- Confirmar se há regras específicas que sobrescrevem o comum
- Documentar decisões que diferem do padrão
- Não assumir comportamentos padrão de elementos (ex: quebra de texto)
- Verificar exemplos similares no código existente

## 14. Validação de Implementação

- Confirmar que todas as instruções da task foram seguidas
- Verificar se não há suposições incorretas
- Validar se os dados seguem as regras especificadas
- Garantir que não há violações das restrições
- Fazer uma revisão final focada nas instruções específicas
- Testar com diferentes cenários de uso

## Exemplo Prático: TipBar

### O que analisar:

1. Background

   - Não é full-width
   - Tem margens laterais em relação ao container
   - Cor exata do cinza usando color picker
   - Padding interno entre background e conteúdo

2. Elementos

   - Tamanho exato dos ícones (maior que 24px)
   - Gap preciso entre ícone e texto
   - Espaçamento entre items da tipbar
   - Peso e tamanho correto da fonte
   - Comportamento do texto (quebra de linha vs scroll)

3. Espaçamentos

   - Padding vertical do componente
   - Margem lateral do background
   - Gap entre elementos
   - Padding interno do conteúdo

4. Container
   - Background não encosta nas bordas
   - Respeita largura máxima
   - Tem margens laterais próprias
   - Padding interno consistente

### Erros comuns a evitar:

1. Assumir que um background é full-width sem verificar margens
2. Usar medidas padrão sem conferir no layout
3. Não verificar espaçamentos internos e externos
4. Ignorar detalhes de tipografia e cores exatas
5. Assumir comportamento padrão de texto sem verificar o layout
6. Não testar diferentes tamanhos de conteúdo
7. Ignorar comportamentos especiais em mobile
