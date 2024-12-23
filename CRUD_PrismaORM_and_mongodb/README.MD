# Projeto: **Backend Nútil - JavaScript**

Este projeto foi desenvolvido como parte da iniciativa **Projetos Backend Nútil**. Ele utiliza JavaScript com o objetivo de fornecer uma base sólida para sistemas back-end, incluindo a geração de senhas seguras e IDs únicos diretamente no servidor, sem delegar essas responsabilidades ao banco de dados.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Plataforma para execução do JavaScript no lado do servidor.
- **Crypto**: Biblioteca nativa do Node.js utilizada para geração de senhas e IDs seguros.
- **Express.js**: Framework minimalista para criação de APIs e gerenciamento de rotas.

---

## 🛠️ Funcionalidades

- **Geração de IDs**:
  - IDs únicos são criados utilizando a biblioteca `crypto` do Node.js, garantindo segurança e unicidade.
  
- **Geração de Senhas Seguras**:
  - Senhas criptograficamente seguras são geradas de forma dinâmica e podem ser personalizadas quanto ao comprimento e complexidade.

- **Estrutura de Projeto Organizada**:
  - O projeto segue uma estrutura de pastas e arquivos clara e escalável, facilitando a manutenção e expansão.

---

## 📂 Estrutura do Projeto

```plaintext
.
├── prisma/
│   ├── schema.prisma/
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   ├── prisma/
│   │   └── prisma.js
│   ├── routes/
│   │   └── routes.js
│   ├── services/
│   │   └── userServices.js
│   └── utils/
│       └── cryptoUtils.js
├── .env.exemple
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado na sua máquina.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/Fsp30/-Node-projects-backend-.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd -Node-projects-backend-
   cd CRUD_PrismaORM_and_mongodb
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor:
   ```bash
   npm start
   ```

5. O servidor estará disponível em:  
   `http://localhost:3000`

---

## 🧪 Testando Funcionalidades

- Utilize ferramentas como **Postman** ou **Insomnia** para testar as rotas.
- Exemplos de rotas:
  - `GET /generate-id`: Gera um ID único.
  - `POST /generate-password`: Gera uma senha personalizada.

---

## 📋 Futuras Implementações

- Integração com bancos de dados para persistência de dados.
- Criação de autenticação JWT para proteção de rotas.
- Adição de documentação completa com **Swagger**.

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas!  
Se você tiver ideias ou encontrar algum problema, abra uma issue ou envie um pull request.

