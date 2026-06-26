
# Dr. Limpow — Estrutura e Home (para validação)

## Arquitetura de rotas

```text
/                       Home (hub de decisão, curta)
/estofados              PF — Higienização de estofados
/lavagem-automotiva     PF — Lavagem, enceramento, polimento, vitrificação
/empresas               B2B — Plano Frota Dr. Limpow
```

Header fixo em todas as páginas: logo (variação horizontal) à esquerda, à direita 3 links — **Estofados · Lavagem Automotiva · Empresas** — e botão primário **Falar no WhatsApp**.

Footer em todas as páginas: logo na variação "tip" (com tagline), links das 3 páginas de público, contato (WhatsApp + Instagram + e-mail), região de atendimento (Vargem Grande Paulista e Cotia – SP), © Dr. Limpow.

## Design system (resumo aplicado)

- Tema dark institucional: base `#0B1420`, cards `#142235`/`#16283D`.
- Tipografia: DM Sans em tudo; Baloo 2 reservado ao wordmark do logo.
- Primária Limpow Blue `#2F56A6`, hover `#4D78C9`, pressed `#1F3C7A`.
- Raios: 10px botões/inputs, 14–16px cards, 16–20px containers grandes.
- Ícones outline, herdando cor do texto.
- Motion: fade + translateY sutil no scroll, easing `cubic-bezier(0.16, 1, 0.3, 1)`. Sem decoração gratuita.
- Um único CTA primário por seção.

## Layout da Home (alto nível)

```text
┌──────────────────────────────────────────────────────────────┐
│ HEADER fixo                                                  │
│ [logo Dr. Limpow]      Estofados  Lavagem  Empresas  [WPP →] │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ HERO                                                         │
│                                                              │
│   A empresa que cuida do seu carro — ou da sua frota —       │
│   sem você sair do lugar.                                    │
│                                                              │
│   Sub: Higienização e estética automotiva a domicílio em     │
│   Vargem Grande Paulista e Cotia. 5+ anos cuidando de        │
│   carros, estofados e frotas corporativas.                   │
│                                                              │
│   Por que você está aqui?                                    │
│   ┌──────────────┐ ┌────────────────┐ ┌───────────────────┐  │
│   │ Estofados    │ │ Meu carro      │ │ Frota da empresa  │  │
│   │ (sofá, auto) │ │ (lavagem,      │ │ (Plano Frota      │  │
│   │              │ │  polimento,    │ │  Dr. Limpow)      │  │
│   │              │ │  vitrificação) │ │                   │  │
│   │   → /estof.  │ │ → /lavagem-…   │ │ → /empresas       │  │
│   └──────────────┘ └────────────────┘ └───────────────────┘  │
│                                                              │
│   (botão central da grade = primário Limpow Blue; os 2       │
│   laterais = secundários outline — para guiar sem travar)    │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ SERVIÇOS (resumo, grid 3×2 com ícone outline + nome)         │
│  Lavagem completa · Enceramento técnico · Polimento          │
│  Vitrificação · Higienização de estofados · Plano Frota      │
│  Cada card linka para a página de público correspondente.    │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ POR QUE A DR. LIMPOW (4 colunas, ícone + título + 1 linha)   │
│  Atendimento a domicílio · 5+ anos de operação ·             │
│  Serviço completo num só lugar · Avaliações reais no Google  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ PROVA SOCIAL                                                 │
│  ⭐ 4,9 no Google     “depoimento 1”  “depoimento 2”  “3”    │
│  (placeholders marcados claramente como substituíveis)       │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                    │
│  “Pronto pra deixar isso com a gente?”                       │
│  [ Falar no WhatsApp → ] (mensagem pré-preenchida genérica)  │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│ FOOTER (logo tip + 3 links + contato + região + Instagram)   │
└──────────────────────────────────────────────────────────────┘
```

## Princípios de copy na Home

- Tom direto, levemente caloroso, sem jargão.
- Cada um dos 3 botões de decisão usa linguagem do público, não do serviço.
- Nenhuma seção da Home repete o conteúdo profundo das páginas internas — a Home é deliberadamente curta e funciona como triagem.

## Detalhes técnicos

- TanStack Start, file-based routes em `src/routes/` (`index.tsx`, `estofados.tsx`, `lavagem-automotiva.tsx`, `empresas.tsx`).
- `head()` por rota com title/description/OG específicos para SEO local.
- WhatsApp via `https://wa.me/55XXXXXXXXXXX?text=...` com mensagem por página (número fica como placeholder `55000000000` até você passar o real).
- Logo recriado em SVG inline (gota com 2 olhos circulares + traço em L como nariz), 4 variações como componentes (`LogoHorizontal`, `LogoVertical`, `LogoTip`, `LogoIcon`). Favicon = `LogoIcon`.
- Mobile-first, sem libs pesadas de animação — apenas CSS transitions + IntersectionObserver leve para os reveals.
- Placeholders explícitos para fotos antes/depois e depoimentos reais.

## O que valido com você antes de construir

1. A Home é só hub de decisão (curta) — ok?
2. Os 3 botões de decisão na Hero usando linguagem do público (Estofados / Meu carro / Frota da empresa) — ok ou prefere outros rótulos?
3. Header com os 3 links de público + CTA WhatsApp — ok, ou prefere um menu mais enxuto?
4. Posso seguir e construir as 4 páginas inteiras na sequência após seu OK?
