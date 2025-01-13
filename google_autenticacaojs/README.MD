# Google Autenticação com Node.js

Este projeto implementa autenticação do Google usando Node.js, Express e Passport.js.

## Tecnologias Utilizadas

- Node.js
- Express
- Passport.js
- Google OAuth 2.0

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fsp30/-Node-projects-backend-.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd google_autenticacao
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   GOOGLE_CLIENT_ID=seu-google-client-id
   GOOGLE_CLIENT_SECRET=seu-google-client-secret
   ```

5. Inicie o servidor:
   ```bash
   node index.js
   ```

6. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```

## Funcionalidades

- Autenticação de usuários com Google OAuth 2.0.
- Visualização de perfil do usuário autenticado.
- Logout do usuário.

## Estrutura do Projeto

- `index.js`: Arquivo principal que configura o servidor e as rotas.
- `.env.exemple`: Arquivo de configuração das variáveis de ambiente.

## Licença

Este projeto está licenciado sob a licença MIT.