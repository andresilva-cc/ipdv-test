# IPDV Test - Server

## Sobre

Esta API foi desenvolvida utilizando como base o meu template [express-api-template](https://github.com/andresilva-cc/express-api-template). Além disso, os seguintes `packages` foram utilizados:

- express (web framework)
- typescript
- sequelize (ORM)
- sequelize-typescript (melhor integração do Sequelize com TypeScript)
- bcrypt (criptografia de senhas)
- body-parser (middleware de parse de body)
- cors (middleware CORS)
- dotenv (carrega variáveis de ambiente no Node.js)
- jsonwebtoken (autenticação baseada em token)
- morgan (middleware de log de requests)
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

Configure as variáveis de ambiente no arquivo `.env`

Execute as migrações do banco de dados:

```bash
npx sequelize db:migrate
```

Execute os seeds:

```bash
npx sequelize db:seed:all
```

Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

Ou, em modo de produção:

```bash
npm run build
npm run start
```

Por fim, configure a aplicação cliente para utilizar a URL desta API ou teste a API através do Insomnia (utilizando o export no diretório `resources`).