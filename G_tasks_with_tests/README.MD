# **Task Manager**

Um sistema de gerenciamento de tarefas desenvolvido com Node.js, TypeScript e Prisma. Este projeto permite que os usuários criem, atualizem, deletem e visualizem tarefas com priorização, utilizando autenticação JWT para controle de acesso. Inclui testes automatizados e exemplos de boas práticas.

---

## **Tecnologias Utilizadas**
- **Node.js**: Plataforma para execução de JavaScript no back-end.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Prisma**: ORM para manipulação do banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional dockerizado.
- **Express**: Framework minimalista para criação de APIs.
- **Jest e Supertest**: Frameworks para testes unitários e de integração.

---

## **Instalação**
### **Pré-requisitos**
- [Node.js](https://nodejs.org)
- [Docker](https://www.docker.com)
- [PNPM](https://pnpm.io/)

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/Fsp30/-Node-projects-backend-.git
   cd G_tasks_with_tests
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Configure o banco de dados no arquivo `.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/taskmanager"
   JWT_SECRET="jwt_key"
   ```

4. Execute as migrações do Prisma:
   ```bash
   pnpm prisma:migrate
   ```

5. Inicie o servidor em modo de desenvolvimento:
   ```bash
   pnpm dev
   ```

6. Acesse o Prisma Studio (opcional):
   ```bash
   pnpm prisma:studio
   ```

---

## **Endpoints**
### **Autenticação**
- **POST /auth/register**: Registra um novo usuário.
- **POST /auth/login**: Realiza login e retorna um token JWT.

### **Tarefas**
- **POST /tasks**: Cria uma nova tarefa.
- **GET /tasks**: Retorna todas as tarefas do usuário autenticado.
- **PATCH /tasks/:id**: Atualiza uma tarefa existente.
- **DELETE /tasks/:id**: Deleta uma tarefa.

---

## **Scripts Disponíveis**
- **`pnpm dev`**: Inicia o servidor em modo de desenvolvimento.
- **`pnpm build`**: Compila o código TypeScript para JavaScript.
- **`pnpm start`**: Executa o servidor em produção.
- **`pnpm test`**: Executa os testes.
- **`pnpm test:watch`**: Executa os testes em modo de observação.
- **`pnpm prisma:migrate`**: Aplica as migrações do banco de dados.
- **`pnpm prisma:generate`**: Gera o cliente Prisma.
- **`pnpm prisma:studio`**: Abre a interface visual do Prisma.

---

## **Testes**
Os testes foram configurados utilizando Jest e Supertest. Incluem:
- **Autenticação**: Testes para login e validação de tokens.
- **Tarefas**: Testes para criação, atualização, exclusão e visualização de tarefas.

Para executar os testes:
```bash
pnpm test
```

---

## **Contribuição**
Sinta-se à vontade para contribuir! Basta abrir um pull request ou criar uma issue.

---

## **Licença**
Este projeto está licenciado sob a [ISC](LICENSE).

---

