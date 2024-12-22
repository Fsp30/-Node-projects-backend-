# CRUD Básico em TypeScript

Este é um projeto simples que implementa um CRUD (Create, Read, Update, Delete) utilizando TypeScript com validações básicas.

## Funcionalidades

- **Criar Usuário:** Adiciona um novo usuário ao sistema.
- **Listar Todos os Usuários:** Retorna a lista completa de usuários.
- **Buscar Usuário:** Permite buscar um usuário por:
  - **ID**
  - **Nome**
  - **Idade**
  - **Email**
- **Atualizar Usuário:** Atualiza as informações de um usuário existente.
- **Excluir Usuário:** Remove um usuário pelo ID.

## Tecnologias Utilizadas

- **TypeScript:** Linguagem principal do projeto.
- **Fastify:** Framework web utilizado para construir as rotas.
- **Zod:** Biblioteca para validações de dados.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-projeto>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor estará rodando em `http://localhost:3000`.

## Estrutura do Projeto

```
┌── src
│   ├── controllers
│   │   └── userController.ts
│   ├── schemas
│   │   └── userSchemas.ts
│   ├── services
│   │   └── userService.ts
│   └── index.ts
└── package.json
```

### Descrição dos Arquivos

- **`controllers/userController.ts`**: Define as rotas e a lógica de requisição/resposta.
- **`schemas/userSchemas.ts`**: Contém as definições e validações de dados usando Zod.
- **`services/userService.ts`**: Implementa a lógica de negócios e manipulação de dados em memória.
- **`index.ts`**: Ponto de entrada do servidor.

## Endpoints Disponíveis

### Criar Usuário
- **POST** `/users`
  - **Body:**
    ```json
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "age": "number"
    }
    ```

### Listar Todos os Usuários
- **GET** `/users`

### Buscar por ID
- **GET** `/users/:id`

### Buscar por Nome
- **GET** `/users/name/:name`

### Buscar por Idade
- **GET** `/users/age/:age`

### Buscar por Email
- **GET** `/users/email/:email`

### Atualizar Usuário
- **PUT** `/users/:id`
  - **Body:** (campos opcionais)
    ```json
    {
      "name": "string",
      "email": "string",
      "age": "number"
    }
    ```

### Excluir Usuário
- **DELETE** `/users/:id`

## Exemplos de Testes

### Criar Usuário
Requisição:
```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"id": "1", "name": "John Doe", "email": "john@example.com", "age": 30}'
```

### Listar Todos os Usuários
Requisição:
```bash
curl http://localhost:3000/users
```

### Buscar por Nome
Requisição:
```bash
curl http://localhost:3000/users/name/John
```

### Atualizar Usuário
Requisição:
```bash
curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/json" \
-d '{"name": "John Smith"}'
```

### Excluir Usuário
Requisição:
```bash
curl -X DELETE http://localhost:3000/users/1
```

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

