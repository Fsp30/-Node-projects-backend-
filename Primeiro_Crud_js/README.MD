# Primeiro CRUD JS

Este projeto é um aplicativo CRUD (Criar, Ler, Atualizar, Excluir) simples desenvolvido com Node.js e Express.js. Ele gerencia dados do usuário com operações básicas.

## Project Structure
Primeiro_Crud_js/
│
├── controller/
│   └── UserController.js
│
├── data/
│   └── Users.js
│
├── routes/
│   └── users.js
│
├── .gitignore
├── index.js
└── package.json


## Features

- Crie um novo usuário
- Recuperar todos os usuários
- Atualizar informações do usuário
- Excluir um usuário

## Tecnologias usadas

- Node.js
- Express.js
- UUID para gerar IDs exclusivos

## Começando

1. Clone o repositório:
clone do git https://github.com/Fsp30/Node-projects-backend

2. Navegue até o diretório do projeto:
cd Node-projects-backend/Primeiro_Crud_js

3. Instale dependências:
instalação npm


4. Inicie o servidor:
npm início


O servidor começará a rodar em `http://localhost:3000`.

## Terminais de API

- `POST /users`: Crie um novo usuário
- `GET /users`: Recupera todos os usuários
- `PUT /users/:id`: Atualizar um usuário
- `DELETE /users/:id`: Exclui um usuário

## Modelo de dados


```json
{
  "id": "string",
  "nome": "string",
  "e-mail": "string",
  "idade": número
}

```

### Validação de entrada
O aplicativo inclui validação de entrada básica para criação e atualização de usuários:

Nome: string obrigatória e não vazia
E-mail: Obrigatório, formato de e-mail válido
Idade: obrigatório, número inteiro positivo


###Tratamento de erros
O aplicativo fornece respostas de erro apropriadas para entradas inválidas e recursos não encontrados.

###Contribuindo
Contribuições, problemas e solicitações de recursos são bem-vindos. Sinta-se à vontade para verificar a isseus page se quiser contribuir.
