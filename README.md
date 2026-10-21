# PortfolioHUB

Repositório criado para organização, versionamento e publicação de projetos.

## Estrutura

- `index.html`: página principal do portfólio.
- `projetos.js`: consulta a descrição pública do CheckorKaput na API do GitHub.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

## Plano e implantação

1. Manter a página estática e integrar um projeto à API pública do GitHub.
2. Consultar o Gemini para revisar a implantação e os cuidados de segurança.
3. Verificar a consulta e o comportamento em caso de falha.
4. Enviar as alterações por uma branch e um pull request para `main`.
5. Conferir a publicação no GitHub Pages e reunir as evidências no PDF final.

Site: https://gianluca-berria.github.io/PortfolioHUB/

Em Settings > Pages, conferir a publicação a partir de `main`, pasta `/ (root)`.
Não há dependências, instalação ou etapa de compilação. Para conferir localmente,
executar `python3 -m http.server 8000` na pasta do projeto e abrir
http://localhost:8000.

## Integração, usuários e segurança

O GitHub armazena os projetos e controla a escrita no repositório mediante contas
e permissões de colaboradores. O PortfolioHUB permite a consulta pública de um
projeto, cujo código e histórico são acessados pelo link do GitHub. A consulta da
API é somente de leitura e não usa token. O site não possui cadastro ou login
próprio; a administração do código ocorre no GitHub.

As descrições recebidas são inseridas com `textContent`, sem interpretar HTML.
A política CSP limita scripts à própria origem e consultas à API do GitHub.
Se a API falhar, exceder seu limite ou demorar mais de dez segundos, a página
mantém o link e informa a indisponibilidade.

Política de acesso: manter a administração com o proprietário e conceder escrita
somente a colaboradores necessários. Alterações devem usar branch e pull request,
com revisão e merge pelo proprietário, Gianluca Berria.
Não publicar senhas, tokens ou chaves privadas. Usar autenticação de dois fatores
na conta e HTTPS no Pages. Confirmar essas configurações na conta e no repositório;
este documento não comprova que já estejam habilitadas.

## Verificações para a entrega

- Abrir o site publicado e confirmar a descrição obtida do GitHub.
- Conferir os links do projeto e do perfil.
- Bloquear a consulta da API e conferir a mensagem de falha e o link preservado.
- Conferir a leitura em tela de celular.

## Pendências da entrega

- Usar o Gemini e guardar a conversa como evidência. Sugestão de pergunta:
  "Revise a implantação deste portfólio estático no GitHub Pages, com consulta
  pública à API do GitHub, e indique os cuidados mínimos de acesso e segurança."
  Fornecer o código e registrar o que foi aproveitado ou descartado da resposta.
- Confirmar as configurações de acesso, autenticação de dois fatores e HTTPS.
- Gravar e publicar no YouTube uma apresentação de aproximadamente cinco minutos:
  objetivo e plano (1 min), site e API (1 min), Git e permissões (1 min),
  segurança e verificações (1 min), apoio do Gemini e desafios (1 min).
- Entregar o PDF com identificação, relato das seis etapas, evidências e links
  do site, do repositório e do vídeo, até 25/10/2026 às 23h55.
