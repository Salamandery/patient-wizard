<p align="center">
  <img alt="Atomiccodes" src="https://www.atomiccodes.com.br/static/media/logo1.73d0ef38.png" width="220" />
</p>

<h1 align="center">Patient Wizard</h1>

<p align="center">
  <a href="#tecnologias"><img src="https://img.shields.io/badge/stack-React%20%7C%20TypeScript-blue" /></a>
  <a href="#setup"><img src="https://img.shields.io/badge/setup-NPM%20%7C%20Yarn-green" /></a>
  <a href="#padroes-de-projeto"><img src="https://img.shields.io/badge/patterns-Context%20API%20%7C%20MultiStep-orange" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgrey" /></a>
</p>

---

## 📑 Sumário
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Padrões de Projeto](#padroes-de-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Setup](#setup)
- [Scripts Disponíveis](#scripts-disponiveis)
- [Configurações](#configuracoes)
- [Contato](#contato)

---

## 🩺 Sobre o Projeto

O **Patient Wizard** é uma aplicação React para agendamento de pacientes, utilizando um fluxo multi-etapas (wizard) com validação, feedback visual e integração com API. O projeto é modular, escalável e segue boas práticas de componentização e contexto global.

---

## 🚀 Tecnologias

- **React 17**
- **TypeScript**
- **@unform/core & @unform/web** — Formulários desacoplados
- **Yup** — Validação de dados
- **Styled-components** — CSS-in-JS
- **React Router DOM v6** — Rotas SPA
- **Axios** — Consumo de API
- **React Icons** — Ícones SVG
- **Polished** — Utilitários de CSS
- **React Spring** — Animações
- **ESLint + Prettier** — Padrão de código

---

## 🏗️ Padrões de Projeto

- **Context API**: Gerenciamento global de estado (MultiStep, Toast)
- **Componentização**: Separação clara entre componentes, páginas, hooks e utilitários
- **MultiStep Pattern**: Wizard de múltiplos passos com navegação dinâmica
- **Validação Centralizada**: Yup + utilitário de erros
- **Serviços de API**: Axios centralizado em `src/services/api.ts`

---

## 📁 Estrutura de Pastas

```
├── public/
├── src/
│   ├── @types/           # Tipagens globais
│   ├── components/       # Componentes reutilizáveis (Input, MultiStepContainer, Toast, etc)
│   ├── hooks/            # Contextos customizados (MultiStep, Toast)
│   ├── pages/            # Páginas (ex: Agendamento)
│   ├── services/         # Integração com APIs
│   ├── utils/            # Funções utilitárias (ex: getValidationErrors)
│   ├── index.tsx         # Entry point
│   └── index.css         # Estilos globais
├── package.json
├── tsconfig.json
├── .eslintrc / .eslintignore
├── prettier.config.js
└── README.md
```

---

## ⚙️ Setup

1. **Clone o repositório:**
   ```bash
   git clone <repo-url>
   cd patient-wizard
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```
3. **Inicie o projeto:**
   ```bash
   npm start
   # ou
   yarn start
   ```
   Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts Disponíveis

- `npm start` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera build de produção em `/build`
- `npm test` — Executa testes
- `npm run lint` — (Se configurado) Lint do código

---

## 🛠️ Configurações

- **TypeScript**: Configurado em `tsconfig.json` (rootDir: src, strict, JSX: react-jsx)
- **ESLint/Prettier**: Padrão Airbnb + Prettier para qualidade e formatação
- **Browserslist**: Compatibilidade ampla (configurado no package.json)

---

## 👤 Autor
by **Rodolfo M. F. Abreu**

---

<p align="center">Feito com 💙 por Atomiccodes</p>
