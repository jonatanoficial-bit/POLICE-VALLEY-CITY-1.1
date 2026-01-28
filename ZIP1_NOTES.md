# ZIP 1 — Correções + Base técnica

Este pacote foca em **estabilidade** e **base técnica**, sem alterar o núcleo do gameplay.

## Mudanças principais

### 1) Assets faltando (imagens quebradas)
- Adicionado `assets/placeholder.png`.
- Criados placeholders para todos os arquivos referenciados em `cases.json` que não existiam em `assets/` (evita imagens quebradas/404).
- Geradas versões `.png` para:
  - `assets/witness_07.png`
  - `assets/witness_08.png`

### 2) Correções de dados
- Ajustados 3 casos que listavam testemunhas como suspeitos (corrigido para `suspect_*.png`).

### 3) Carregamento de casos mais robusto
- O jogo agora tenta carregar os casos por:
  1. `data/cases.json`
  2. `cases.json` (fallback)

### 4) Fallback global para imagens
- Ao iniciar, todas as tags `<img>` recebem um `onerror` que troca automaticamente para `assets/placeholder.png`.

### 5) Reset de progresso
- Adicionado botão **Resetar Jogo** em Estatísticas.
- Implementada função `resetGame()` que apaga o save (`localStorage`) e recarrega a página.

### 6) Mobile: scroll seguro em cards
- `.card` agora tem `max-height: 90vh` + `overflow-y: auto` para evitar cortes em telas pequenas.

## Estrutura
- Criada pasta `data/` com uma cópia de `cases.json` para futuras evoluções sem quebrar compatibilidade.
