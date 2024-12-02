# **Requisitos do Projeto**

## **1. Visão Geral**

**Nome do Projeto:** BOOKSTORE  
**Data de Início:** 13/08/2024  
**Data de Término Estimada:** 02/12/2024
**Responsáveis:**  
- Guilherme Cavalcante - RA: 55824  
- César Oliveira - RA: 60049  
**Versão:** 1.4  
**Última Atualização:** 02/12/2024

### **1.1. Objetivo**
Desenvolver um sistema CRUD para uma livraria, permitindo que os usuários possam cadastrar, editar, excluir e visualizar livros e usuários.

### **1.2. Escopo**

O sistema terá as seguintes funcionalidades:

- **Cadastro de livros:** Permite cadastrar novos livros com informações como título, autor, preço e descrição.
- **Edição de livros:** Permite editar as informações dos livros cadastrados, como título, autor e preço.
- **Exclusão de livros:** Funcionalidade para excluir livros do sistema.
- **Visualização de livros:** Exibe uma lista de todos os livros cadastrados com a opção de visualizar detalhes de cada um.
- **Cadastro de usuários:** Permite cadastrar novos usuários com informações como nome, e-mail e senha.
- **Edição de usuários:** Permite editar as informações dos usuários cadastrados, como nome, e-mail e senha.
- **Exclusão de usuários:** Funcionalidade para excluir usuários do sistema.
- **Visualização de usuários:** Exibe uma lista de todos os usuários cadastrados com detalhes de cada um.
- **Autenticação de usuários:** Sistema de login com verificação de credenciais para acesso ao sistema.

---

## **2. Estrutura do Projeto**

A estrutura do projeto é organizada da seguinte forma:

```plaintext
📂 bookstore/
├── 📁 src/                
│   ├── 📁 config/         # Arquivos de configuração.
│   ├── 📁 controllers/    # Controladores que gerenciam as operações das rotas.
│   ├── 📁 helpers/        # Arquivos de ajuda para funções e métodos reutilizáveis.
│   ├── 📁 models/         # Definição dos modelos de dados da aplicação.
│   ├── 📁 migrations/     # Arquivos de criação de tabelas no banco de dados.
│   ├── 📁 routes/         # Arquivos de definição das rotas.
│   ├── 📁 repository/     # Arquivos de acesso aos dados.
│   ├── 📁 services/       # Lógica de negócios e regras da aplicação.
│   ├── 📄 app.js          # Configuração e inicialização da aplicação.
│   └── 📄 server.js       # Arquivo principal que inicia o servidor.
├── 📄 package.json        # Gerenciamento de dependências e scripts do projeto.
├── 📄 README.md           # Documentação do projeto.
```

# **Instruções de Execução e Exemplos de Rotas**

## **1. Clonar o Repositório**

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/guilhermecavalcante/bookstore.git
```

## **2. Instalar Dependências**

Acesse o diretório do projeto e instale as dependências necessárias:

```bash
cd bookstore
cd api
npm install
```

```bash
cd front
## Abrir com Live server.
```

## **3. Iniciar o Servidor**

Para rodar o servidor, use o comando abaixo:

```bash
npx ts-node src/server.ts
```
O servidor estará em execução e pode ser acessado em http://localhost:3000.

```markdown
# **Exemplos de Uso das Rotas**

Aqui estão os exemplos de uso das rotas definidas no projeto:

## **Livros**

### **Listar todos os livros**

- **Método:** `GET`
- **Rota:** `/api/books`
- **Descrição:** Retorna todos os livros cadastrados.

**Exemplo de requisição:**

```bash
GET http://localhost:3000/api/books
```

### **Cadastrar um livro**

- **Método:** `POST`
- **Rota:** `/api/books`
- **Autenticação:** Requer um token JWT
- **Descrição:** Adiciona um novo livro à livraria.

**Exemplo de requisição:**

```bash
POST http://localhost:3000/api/books
Content-Type: application/json
Authorization: Bearer [seu_token_jwt]
```

**Corpo da requisição:**

```json
{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "price": 59.90,
  "description": "Uma obra épica de fantasia."
}
```

### **Visualizar um livro por ID**

- **Método:** `GET`
- **Rota:** `/api/books/:id`
- **Descrição:** Retorna os detalhes de um livro específico com base no ID.

**Exemplo de requisição:**

```bash
GET http://localhost:3000/api/books/1
```

### **Atualizar um livro**

- **Método:** `PUT`
- **Rota:** `/api/books/:id`
- **Autenticação:** Requer um token JWT
- **Descrição:** Atualiza as informações de um livro existente.

**Exemplo de requisição:**

```bash
PUT http://localhost:3000/api/books/1
Content-Type: application/json
Authorization: Bearer [seu_token_jwt]
```

**Corpo da requisição:**

```json
{
  "title": "O Hobbit",
  "author": "J.R.R. Tolkien",
  "price": 49.90,
  "description": "Uma nova edição do clássico."
}
```

### **Excluir um livro**

- **Método:** `DELETE`
- **Rota:** `/api/books/:id`
- **Autenticação:** Requer um token JWT
- **Descrição:** Exclui um livro específico.

**Exemplo de requisição:**

```bash
DELETE http://localhost:3000/api/books/1
Authorization: Bearer [seu_token_jwt]
```

---

## **Usuários**

### **Registrar um novo usuário**

- **Método:** `POST`
- **Rota:** `/api/register`
- **Descrição:** Cadastra um novo usuário no sistema.

**Exemplo de requisição:**

```bash
POST http://localhost:3000/api/register
Content-Type: application/json
```

**Corpo da requisição:**

```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
```

### **Login de usuário**

- **Método:** `POST`
- **Rota:** `/api/login`
- **Descrição:** Realiza o login do usuário e retorna um token JWT.

**Exemplo de requisição:**

```bash
POST http://localhost:3000/api/login
Content-Type: application/json
```

**Corpo da requisição:**

```json
{
  "email": "joao@email.com",
  "password": "senha123"
}
```

### **Listar todos os usuários**

- **Método:** `GET`
- **Rota:** `/api/users`
- **Autenticação:** Requer um token JWT
- **Descrição:** Retorna uma lista de todos os usuários cadastrados.

**Exemplo de requisição:**

```bash
GET http://localhost:3000/api/users
Authorization: Bearer [seu_token_jwt]
```

### **Visualizar um usuário por ID**

- **Método:** `GET`
- **Rota:** `/api/users/:id`
- **Autenticação:** Requer um token JWT
- **Descrição:** Retorna os detalhes de um usuário específico com base no ID.

**Exemplo de requisição:**

```bash
GET http://localhost:3000/api/users/1
Authorization: Bearer [seu_token_jwt]
```

### **Atualizar um usuário**

- **Método:** `PUT`
- **Rota:** `/api/users/:id`
- **Autenticação:** Requer um token JWT
- **Descrição:** Atualiza as informações de um usuário existente.

**Exemplo de requisição:**

```bash
PUT http://localhost:3000/api/users/1
Content-Type: application/json
Authorization: Bearer [seu_token_jwt]
```

**Corpo da requisição:**

```json
{
  "name": "João Silva",
  "email": "joao.novo@email.com",
  "password": "senha456"
}
```

### **Excluir um usuário**

- **Método:** `DELETE`
- **Rota:** `/api/users/:id`
- **Autenticação:** Requer um token JWT
- **Descrição:** Exclui um usuário do sistema.

**Exemplo de requisição:**

```bash
DELETE http://localhost:3000/api/users/1
Authorization: Bearer [seu_token_jwt]
```

**USUARIO PARA TESTE FRONT-END**
```bash
Email: admin@admin.com
Password: admin
```
