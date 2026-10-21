# PortfolioHUB

Portfólio acadêmico estático publicado no GitHub Pages.

Site: https://gianluca-berria.github.io/PortfolioHUB/

## Estrutura e implantação

- index.html: página principal.
- projetos.js: consulta a descrição pública do CheckorKaput na API do GitHub.
- Publicação no GitHub Pages, sem dependências ou compilação.

O trabalho compreendeu a publicação da página, integração com o GitHub,
tratamento de falhas, revisão de segurança e documentação.

## Integração e controle de acesso

O GitHub armazena os projetos e mantém o histórico de versões.
O portfólio consulta informações públicas sem utilizar token.
A administração ocorre pelas contas e permissões do GitHub;
não há cadastro ou login próprio no site.

Alterações devem passar por branch e pull request, com revisão e merge
pelo proprietário, Gianluca Berria. Permissões de escrita devem ser
limitadas aos colaboradores necessários.

## Segurança

A página utiliza HTTPS, insere descrições com textContent e possui CSP
que restringe scripts à própria origem e consultas à API do GitHub.
Os arquivos revisados não contêm credenciais.

Falhas na API exibem uma mensagem e preservam o link do projeto.
A consulta possui limite de dez segundos.

O 2FA da conta e as permissões de colaboradores ainda precisam ser
confirmados pelo proprietário.

## Verificações

- Página publicada: descrição carregada pela API no navegador.
- Links do projeto e do perfil: respostas HTTP 200.
- Cinco cenários locais aprovados: sucesso, descrição ausente,
  erro HTTP, falha de rede e JSON inválido.
- Verificação em tela de celular: pendente.

## Uso de inteligência artificial

O ChatGPT auxiliou na implementação da integração, no tratamento de
falhas, na configuração da CSP, nas verificações locais e na elaboração
e revisão da documentação e do código.

O Gemini foi consultado inicialmente, mas não conseguiu acessar os
arquivos. A revisão efetiva foi realizada com o ChatGPT.

## Entrega

O PDF final reunirá o relato da implantação, as evidências disponíveis
e os links do site e do repositório.

A apresentação em vídeo não integra esta entrega por decisão do autor,
embora seja solicitada no enunciado. A substituição do Gemini pelo
ChatGPT também difere da ferramenta expressamente indicada.
