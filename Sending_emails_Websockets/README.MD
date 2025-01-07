# Notification System

Este projeto é um sistema de notificações simples construído com Node.js, TypeScript, Express, Prisma, PostgreSQL e outras bibliotecas úteis. Ele permite o registro de usuários, login, criação e visualização de notificações, e o envio de emails de notificação.

## Estrutura do Projeto

```
/project-root
├── /prisma
│   └── schema.prisma
├── /src
│   ├── /prisma
│   │   └── index.ts
│   ├── /controllers
│   │   ├── authController.ts
│   │   └── notificationController.ts
│   ├── /services
│   │   ├── authService.ts
│   │   ├── emailService.ts
│   │   └── notificationService.ts
│   ├── /utils
│   │   └── jwtUtils.ts
│   ├── app.ts
│   └── server.ts
└── .env
```

## Instalação

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure o arquivo `.env` com suas credenciais de banco de dados, e-mail e segredo JWT.

## Configuração do Prisma

1. Execute `npx prisma generate` para gerar o cliente Prisma.
2. Migre o banco de dados com `npx prisma migrate dev`.

## Comandos

- `npm run dev`: Inicia o servidor em modo de desenvolvimento.
- `npm run build`: Compila o TypeScript para JavaScript.
- `npm start`: Inicia o servidor em modo de produção.

## Endpoints

### Autenticação

- `POST /register`: Registra um novo usuário.
  - **Body**:
    ```json
    {
      "email": "email@example.com",
      "password": "password"
    }
    ```
- `POST /login`: Faz login de um usuário.
  - **Body**:
    ```json
    {
      "email": "email@example.com",
      "password": "password"
    }
    ```

### Notificações

- `GET /notifications`: Obtém todas as notificações do usuário autenticado. (Requer token de autenticação)
- `POST /notifications`: Cria uma nova notificação para o usuário autenticado. (Requer token de autenticação)
  - **Body**:
    ```json
    {
      "message": "Nova mensagem de notificação"
    }
    ```
