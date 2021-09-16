# IPDV Test - Client

## Sobre

Este sistema web foi desenvolvida com Nuxt.js (framework para Vue.js). Além disso, os seguintes `packages` foram utilizados:

- @nuxtjs/auth (módulo de autenticação para Nuxt.js)
- @nuxtjs/axios (módulo para integrar o Axios ao Nuxt.js)
- @nuxtjs/i18n (módulo para integrar o plugin de internacionalização do Vue.js no Nuxt.js)
- vuetify (framework que implementa o Material Design para Vue.js)
- eslint (formatação e padrão de código)

## Setup e execução

Instale as dependências com:

```bash
npm install
```

Crie uma cópia do arquivo `.env.example` como `.env`:

```bash
cp .env.example .env
```

Configure a porta que a aplicação irá rodar (por padrão 3000) e a URL base da API (por padrão `http://localhost:8000`) no arquivo `.env`.

Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Ou, em modo de produção:

```bash
npm run build
npm run start
```
