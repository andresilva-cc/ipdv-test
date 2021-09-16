# IPDV Test - Server

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