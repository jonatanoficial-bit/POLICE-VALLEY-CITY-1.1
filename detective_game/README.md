# Valley Detective – Skeleton Game

Este repositório contém um esqueleto funcional de um jogo de detetive com estética AAA para ser usado como ponto de partida em um projeto maior. O jogador escolhe um avatar, informa seu nome e assume o papel de investigador na fictícia cidade de **Valley**, interrogando testemunhas e acumulando pontuação e prestígio conforme responde corretamente às perguntas. Dependendo do desempenho, o personagem pode ser promovido para o FBI ou até mesmo para a CIA.

## Conteúdo

- **index.html** – página principal com as telas de seleção de avatar, gameplay e resultados.
- **style.css** – folhas de estilo em modo escuro com visual cinematográfico inspirado em jogos AAA.
- **script.js** – lógica de jogo em JavaScript, incluindo gerenciamento de perguntas, pontuação, prestígio e promoções.
- **assets/** – contém imagens geradas por IA para o fundo da cidade e para três avatares diferentes. Estas imagens podem ser substituídas por artes próprias.

## Como executar

O projeto é composto por arquivos estáticos (HTML, CSS e JavaScript) e pode ser executado em qualquer navegador moderno. Para evitar restrições de segurança ao abrir arquivos locais (`file://`), recomenda‑se servir os arquivos através de um servidor HTTP local.

1. **Clonar ou baixar o repositório**: extraia o conteúdo do arquivo `.zip` em uma pasta de sua preferência.
2. **Executar um servidor local** (opcional, mas recomendado). Se você tiver o Python instalado, execute o seguinte comando no diretório `detective_game`:

   ```bash
   python3 -m http.server 8000
   ```

   Em seguida, abra um navegador e acesse `http://localhost:8000` para iniciar o jogo.

   Alternativamente, se preferir, você pode abrir o arquivo `index.html` diretamente no navegador. Alguns navegadores, contudo, bloqueiam interações JavaScript em arquivos locais; nesse caso, o servidor HTTP resolve o problema.

3. **Jogar**: na tela inicial, selecione um avatar clicando na imagem, digite seu nome de detetive e clique em **“Iniciar Jogo”**. Responda às perguntas corretamente para ganhar pontos e prestígio. Ao final, será exibida uma mensagem com sua pontuação e a classificação final (Detective, FBI ou CIA).

## Personalização

Este esqueleto foi projetado para ser facilmente extensível. Algumas sugestões de melhorias:

- Adicionar mais perguntas, ramificações narrativas e consequências para respostas erradas.
- Substituir as imagens em `assets/` por artes exclusivas ou fotos de atores (respeitando direitos autorais).
- Implementar um sistema de inventário, pistas coletadas, múltiplos suspeitos e desfechos diferentes.
- Integrar trilha sonora e efeitos sonoros para aumentar a imersão.

## Nota sobre AAA

De acordo com a definição da indústria, jogos classificados como **AAA** são produzidos ou distribuídos por publishers médios ou grandes com orçamentos elevados e utilizam elementos como cut‑scenes cinematográficas, dublagem e gráficos de alta fidelidade【979739128205684†L149-L156】. Este esqueleto reproduz uma estética inspirada nesses jogos utilizando imagens de alta qualidade e um design de interface rico, mas não pretende replicar a complexidade técnica ou o orçamento de títulos AAA completos.

## Licença

Os arquivos de código (`.html`, `.css` e `.js`) são disponibilizados sem restrições; use e modifique livremente. As imagens geradas por IA fornecidas em `assets/` podem ser utilizadas no contexto deste projeto. Se desejar publicar o jogo, substitua‑as por obras que você tenha direito de uso.