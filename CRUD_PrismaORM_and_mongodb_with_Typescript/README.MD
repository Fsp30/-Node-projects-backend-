# CRUD de Usuários e Itens com TypeScript, Prisma e MongoDB

Este projeto é uma API para gerenciar usuários e itens, construída com TypeScript, Fastify, Prisma e MongoDB. A API segue boas práticas de desenvolvimento e utiliza validações com Zod.

---

## Funcionalidades

- **Usuários**
  - Criar usuários
  - Atualizar usuários (mantendo campos existentes caso algum campo seja omitido)
  - Buscar todos os usuários
  - Buscar usuário por ID
  - Deletar usuário

- **Itens**
  - Criar itens (associados a um usuário proprietário)
  - Atualizar itens (mantendo campos existentes caso algum campo seja omitido)
  - Buscar todos os itens
  - Buscar item por ID
  - Deletar item

---

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Prisma ORM**
- **MongoDB**
- **Zod** (validação)

---

## Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão 16 ou superior)
- MongoDB em execução
- NPM ou Yarn

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fsp30/-Node-projects-backend-.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd -Node-projects-backend-
   cd CRUD_PrismaORM_and_mongodb_with_Typescript
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

---
- Configure o arquivo .env: Crie um arquivo .env na raiz do projeto e configure a URL do banco de dados:

    ``` bash
    DATABASE_URL="mongodb://localhost:27017/seu-banco"
    ```
---
### Execução do Projeto

    ``` bash
    npm run dev
    ```
- Transpilar para JavaScript e Rodar
    ```` bash
    npm run build
    ```

- Execute a versão transpilada:

``` bash
    npm start
```
---
## Rotas da API
# Usuários
- POST /users - Criar um novo usuário
- PUT /users/:id - Atualizar um usuário existente
- GET /users - Buscar todos os usuários
- GET /users/:id - Buscar um usuário por ID
- DELETE /users/:id - Deletar um usuário
---
# Itens
- POST /items - Criar um novo item
- PUT /items/:id - Atualizar um item existente
- GET /items - Buscar todos os itens
- GET /items/:id - Buscar um item por ID
- DELETE /items/:id - Deletar um item
---
### Testes

Este projeto ainda não inclui testes automatizados, mas recomenda-se o uso de ferramentas como Jest para criar um conjunto de testes unitários e de integração.
---

### Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.