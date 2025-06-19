# 📘 Diário de Leitura (Reading Journal)

Este é um projeto frontend desenvolvido com **React + Vite** como parte da disciplina **Desenvolvimento de Sistemas Frontend** da PUCRS. O objetivo é criar um CRUD (Create, Read, Update, Delete) de livros lidos, funcionando como um diário de leitura pessoal. A aplicação consome uma **API REST local**, permitindo:

- ✅ Cadastrar um novo livro lido
- 🔎 Listar livros cadastrados
- ✏️ Editar livros
- ❌ Excluir livros

---

## 🚀 Como executar o projeto

### 1. Clone e execute a API

O backend está disponível no seguinte repositório: https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/tree/main/readingJournal-api.

```bash
git clone https://github.com/adsPucrsOnline/DesenvolvimentoFrontend.git
cd DesenvolvimentoFrontend/readingJournal-api
npm install
npm start
```

### 2. Clone execute o Front-End

O frontend está disponível neste repositório

```bash
git clone https://github.com/gabrielzfn/projeto-BackupLeitura.git
cd projeto-BackupLeitura
npm install
npm run dev
```

<br>

## 📁 Estrutura do projeto

```bash
src/
├── components/
│   └── Header.jsx         # Navegação entre páginas (Home, Sobre, Cadastrar, Leituras)
├── pages/
│   ├── Home.jsx           # Página de boas-vindas
│   ├── About.jsx          # Página com explicação sobre o projeto
│   ├── Create.jsx         # Formulário para cadastrar ou editar livros
│   └── List.jsx           # Página com a listagem dos livros cadastrados
├── services/
│   └── api.js             # Configuração do Axios para comunicação com a API
├── App.jsx                # Componente principal e configuração das rotas
└── main.jsx               # Entrada da aplicação React (ponto de montagem)
```

<br>

## 🧩 Descrição dos componentes

### Header.jsx
- Barra de navegação no topo do site
- Usa react-router-dom para navegação
- Indica a página atual com botão ativo

### Home.jsx
- Página inicial com logo e slogan
- Serve como landing page do projeto

### About.jsx
- Contém informações sobre o propósito do projeto
- Explica que se trata de um CRUD desenvolvido para a disciplina

### Create.jsx
- Formulário com os campos: Título, Autor, Gênero e Data de leitura
- Pode ser usado para cadastrar ou editar um livro
- Integração com API:
  - POST /books → para cadastro
  - PUT /books → para atualização

### List.jsx
- Exibe a lista de livros cadastrados
- Botões de ação:
  - 📝 Editar → redireciona para o Create.jsx preenchido
  - 🗑️ Excluir → remove o livro da base
- Integração com API:
  - GET /books → busca todos os livros
  - DELETE /books/:id → remove livro por ID
 
### api.js
```js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export default api;

```

<br>

## 🛠️ Dependências principais

- React
- Vite
- React Router DOM
- Material UI
- Axios
- Emotion (para estilização MUI)

<br>

### 📬 Observações

- Certifique-se de que a API está rodando antes de abrir o frontend
- O formulário de cadastro detecta automaticamente se está editando (baseado no id)
- A exclusão e edição atualizam a lista sem recarregar a página

<br>

### Licença

Projeto desenvolvido para fins acadêmicos por Gabriel Zefino Teixeira – Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Uso livre para aprendizado e modificações não comerciais.
