## 📜 Ideia final
Estou desenvolvendo esse projeto, pois tenho interesse em de fato ter uma plataforma de ensino de programação totalmente gratuita, esse repo será somente a base, o projeto mais elaborado ficará em um repo privado (no momento). Será algo que vai demorar a sair, até porque estou trabalhando sozinho (aceito ajuda rsrs). E como tenho outro emprego não consigo focar totalmente nesses projetos do git, espero que as únicas duas pessoas que estão ansiosas pelo projeto entendam a demora.

# Plataforma de Ensino - Backend (NestJS)

## 📌 Sobre o Projeto
Este repositório contém a API backend para uma plataforma fictícia de ensino voltada para tecnologia. O projeto está sendo desenvolvido utilizando **NestJS** e será expandido ao longo do tempo com novas funcionalidades. 

## 🚀 Tecnologias Utilizadas
- **NestJS** - Framework para Node.js
- **TypeORM** - ORM para interação com banco de dados
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Para gerenciamento do banco de dados
- **Thunder Client** - Para testes de API

## 🔥 Status Atual - Versão `1.0.4`
O backend está na **versão 1.0.4**, contendo:
- CRUD inicial para usuários
- Conexão com PostgreSQL via Docker
- Arquitetura básica estruturada com módulos e serviços
- **1.0.1** → Inclusão de testes automatizados
- **1.0.2** → Implementação de DTOs (Data Transfer Objects)
- **1.0.3** → Atualização de testes (se adaptando as DTOs)
- **1.0.4** → Implementação de Migrations 

## 📅 Próximas Atualizações
- **1.2.0** → Migração da API para GraphQL
- **Futuro** → Outras melhorias e novos recursos



## 🛠 Como Executar o Projeto
### 📋 Pré-requisitos
Antes de rodar o projeto, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [NestJS CLI](https://docs.nestjs.com/) (`npm install -g @nestjs/cli`)

### 🔧 Instalação e Execução
1. Clone este repositório:
   ```sh
   git clone https://github.com/Fsp30/-Node-projects-backend-.git
   cd nestjs
   cd my_app
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Suba o banco de dados com Docker:
   ```sh
   docker-compose up -d
   ```

4. Execute o projeto em modo de desenvolvimento:
   ```sh
   npm run start:dev
   ```

## 📡 Testando a API
Utilize o **Thunder Client** (ou Postman) para testar as rotas da API.

## 🎯 Frontend Futuro
O frontend desta aplicação será desenvolvido utilizando **ReactJS**.

## 📜 Licença
Este projeto está sob a licença MIT.

