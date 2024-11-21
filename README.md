
# **Requisitos do Projeto**

## **1. Visão Geral**

**Nome do Projeto:** BOOKSTORE  
**Data de Início:** 13/08/2024  
**Data de Término Estimada:** 
**Responsável:** Guilherme Cavalcante - RA:55824 e César Oliveira - RA:60049  
**Versão:** 1.2
**Última Atualização:** 20/11/2024

### **1.1. Objetivo**
Desenvolver um sistema CRUD para uma livraria, permitindo que os usuários cadastrem, editem, excluam e visualizem livros e usuários.

### **1.2. Escopo**

- **Cadastro de livros**: Funcionalidade para cadastrar novos livros com informações como título, autor, preço e descrição.
- **Edição de livros**: Permitir a edição das informações dos livros cadastrados, como título, autor e preço.
- **Exclusão de livros**: Funcionalidade para excluir livros cadastrados no sistema.
- **Visualização de livros**: Listagem de todos os livros cadastrados com a opção de visualizar detalhes de cada um.
- **Cadastro de usuários**: Funcionalidade para cadastrar novos usuários com informações como nome, e-mail e senha.
- **Edição de usuários**: Permitir a edição das informações dos usuários cadastrados, como nome, e-mail e senha.
- **Exclusão de usuários**: Funcionalidade para excluir usuários do sistema.
- **Visualização de usuários**: Listagem de todos os usuários cadastrados, com detalhes de cada um.
- **Autenticação de usuários**: Sistema de login com verificação de credenciais para acesso ao sistema.

### **2. Requisitos Funcionais**

| ID   | Requisito Funcional                                      | Prioridade | Status       |
|------|----------------------------------------------------------|------------|--------------|
| RF01 | O sistema deve permitir o cadastro de livros com título, autor, preço e descrição. | Alta       | <span style="color:green;">Concluído</span> |
| RF02 | O sistema deve permitir a edição de livros, com a possibilidade de atualizar título, autor, preço e descrição. | Alta       | <span style="color:green;">Concluído</span> |
| RF03 | O sistema deve permitir a exclusão de livros cadastrados. | Alta       | <span style="color:green;">Concluído</span> |
| RF04 | O sistema deve permitir a visualização da lista de todos os livros cadastrados. | Média      | <span style="color:green;">Concluído</span> |
| RF05 | O sistema deve permitir a visualização dos detalhes de um livro específico. | Média      | <span style="color:green;">Concluído</span> |
| RF06 | O sistema deve permitir o cadastro de usuários com nome, e-mail e senha. | Alta       | <span style="color:green;">Concluído</span> |
| RF07 | O sistema deve permitir a edição de dados do usuário, como nome, e-mail e senha. | Alta       | <span style="color:green;">Concluído</span> |
| RF08 | O sistema deve permitir a exclusão de usuários cadastrados. | Alta       | <span style="color:green;">Concluído</span> |
| RF09 | O sistema deve permitir a visualização de todos os usuários cadastrados. | Média      | <span style="color:green;">Concluído</span> |
| RF10 | O sistema deve permitir que usuários realizem login com validação de credenciais (e-mail e senha). | Alta       | <span style="color:green;">Concluído</span> |

### **2.1. Descrição dos Requisitos Funcionais**
Descreva cada requisito funcional em detalhes.

**RF01: Cadastro de Livros**  
**Descrição:** O sistema deve permitir o cadastro de livros, incluindo os campos título, autor, preço e descrição. O usuário deve preencher os campos obrigatórios e, ao clicar no botão "Cadastrar", o livro será salvo no banco de dados. Após o cadastro, o sistema deve exibir uma mensagem de sucesso e redirecionar o usuário para a lista de livros cadastrados.

**RF02: Edição de Livros**  
**Descrição:** O sistema deve permitir a edição de livros previamente cadastrados. O usuário poderá atualizar os campos título, autor, preço e descrição. A edição será realizada por meio de uma interface de edição acessível a partir da visualização do livro. Após a atualização, o sistema deve salvar as alterações e exibir uma mensagem de sucesso.

**RF03: Exclusão de Livros**  
**Descrição:** O sistema deve permitir a exclusão de livros. O usuário poderá excluir um livro através da interface de visualização do livro, clicando no botão "Excluir". Após a confirmação da exclusão, o livro será removido do banco de dados e o sistema deve exibir uma mensagem de sucesso.

**RF04: Visualização da Lista de Livros**  
**Descrição:** O sistema deve permitir a visualização de todos os livros cadastrados. A lista deve ser exibida em uma página específica, com os detalhes básicos de cada livro (título, autor, preço). O usuário deve ser capaz de visualizar essa lista de forma ordenada e com a possibilidade de buscar livros por título ou autor.

**RF05: Visualização de Detalhes de um Livro**  
**Descrição:** O sistema deve permitir a visualização de detalhes completos de um livro. Quando o usuário clicar em um livro na lista de livros, ele será redirecionado para uma página de detalhes do livro, onde poderá visualizar todas as informações, como título, autor, preço e descrição.

**RF06: Cadastro de Usuários**  
**Descrição:** O sistema deve permitir o cadastro de usuários, incluindo os campos nome, e-mail e senha. O usuário preencherá esses dados e, ao clicar no botão "Cadastrar", o sistema irá salvar as informações e criar uma conta para o usuário. Após o cadastro, o sistema exibirá uma mensagem de sucesso e redirecionará para a tela de login.

**RF07: Edição de Dados do Usuário**  
**Descrição:** O sistema deve permitir a edição dos dados do usuário, incluindo nome, e-mail e senha. O usuário poderá atualizar seus dados através de uma interface de edição. Após a atualização, o sistema salvará as alterações e exibirá uma mensagem de sucesso.

**RF08: Exclusão de Usuários**  
**Descrição:** O sistema deve permitir a exclusão de usuários. O usuário poderá excluir sua conta através da interface de configurações da conta, clicando no botão "Excluir Conta". Após a confirmação da exclusão, a conta será removida do sistema e o usuário será redirecionado para a página de login.

**RF09: Visualização de Usuários Cadastrados**  
**Descrição:** O sistema deve permitir a visualização de todos os usuários cadastrados. A lista de usuários será exibida em uma página específica, com os detalhes básicos de cada usuário, como nome e e-mail. O administrador do sistema poderá visualizar essa lista para gerenciar os usuários.

**RF10: Login de Usuários**  
**Descrição:** O sistema deve permitir que os usuários realizem login com seu e-mail e senha. O sistema deve validar as credenciais e, se forem corretas, permitir o acesso do usuário à plataforma. Caso as credenciais estejam erradas, o sistema deve exibir uma mensagem de erro informando que o login falhou.


## **3. Requisitos Não Funcionais**

| ID   | Requisito Não Funcional                                  | Prioridade | Status       |
|------|----------------------------------------------------------|------------|--------------|
| RNF01| O sistema deve ser capaz de suportar até 1000 requisições simultâneas | Alta       | Concluído    |
| RNF02| O sistema deve garantir que os dados dos livros sejam armazenados com segurança utilizando criptografia para informações sensíveis | Alta       | Concluído    |
| RNF03| O sistema deve ser responsivo, ou seja, deve se adaptar a diferentes tamanhos de tela, incluindo desktop, tablet e dispositivos móveis | Média      | Concluído    |
| RNF04| O tempo de resposta de todas as requisições deve ser inferior a 2 segundos | Alta       | Concluído    |
| RNF05| O sistema deve ser compatível com as versões mais recentes dos principais navegadores (Chrome, Firefox, Safari, Edge) | Média      | Concluído    |
| RNF06| O sistema deve realizar backups diários dos dados no banco de dados | Alta       | Concluído    |

### **3.1. Descrição dos Requisitos Não Funcionais**
Descreva cada requisito não funcional em detalhes.

**RNF01: Capacidade de Requisições Simultâneas**  
**Descrição:** O sistema deve ser projetado para suportar até 1000 requisições simultâneas sem degradação de desempenho, garantindo a escalabilidade para crescimento futuro. Isso implica no uso de boas práticas de otimização, como o uso de cache, balanceamento de carga e monitoramento constante do desempenho.

**RNF02: Segurança de Dados**  
**Descrição:** O sistema deve garantir a proteção dos dados armazenados, utilizando criptografia AES-256 para armazenar informações sensíveis, como senhas de usuários. A criptografia deve ser aplicada tanto para os dados em trânsito quanto para os dados em repouso, a fim de garantir a segurança e confidencialidade das informações.

**RNF03: Responsividade**  
**Descrição:** O sistema deve ser projetado para funcionar corretamente em dispositivos com diferentes tamanhos de tela. A interface deve ser fluida e adaptável, utilizando design responsivo com media queries CSS, garantindo uma boa experiência de usuário em qualquer dispositivo.

**RNF04: Tempo de Resposta**  
**Descrição:** Todas as requisições ao sistema devem ser processadas e respondidas em menos de 2 segundos, incluindo a interação com o banco de dados e a geração de páginas dinâmicas. Isso deve ser monitorado e otimizado continuamente, buscando melhorar a performance através de técnicas como otimização de consultas SQL e uso de cache.

**RNF05: Compatibilidade com Navegadores**  
**Descrição:** O sistema deve ser testado e funcionar corretamente nas versões mais recentes dos principais navegadores, como Google Chrome, Mozilla Firefox, Apple Safari e Microsoft Edge. A compatibilidade deve ser garantida, considerando as diferenças de implementação entre os navegadores.

**RNF06: Backup de Dados**  
**Descrição:** O sistema deve realizar backups automáticos dos dados do banco de dados pelo menos uma vez por dia, garantindo que, em caso de falha ou perda de dados, seja possível restaurar as informações até o último ponto de backup. Esses backups devem ser armazenados em uma localização segura e devem ser monitorados para garantir sua integridade.

---


### Como Iniciar a API

Para iniciar a API, utilize o seguinte comando no terminal:

```bash
npx ts-node src/server.ts
