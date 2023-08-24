# Template Next 



![GitHub repo size](https://img.shields.io/github/repo-size/maykonsousa/template-next?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/maykonsousa/template-next?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/maykonsousa/template-next?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/maykonsousa/template-next?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/maykonsousa/template-next?style=for-the-badge)


  
  <br>

> Este é um template configurado para inicializar um projeto Next já com algumas ferramentas de padrão e qualidade de código. Ao usar esse template, não esqueça de atualizar esse arquivo README, para documentar o seu projeto

## Ferramentas inclusas

- **ESLint - Styleguide do AirBnB:** Esta configuração ajuda a manter um código JavaScript consistente e de alta qualidade, seguindo as diretrizes do estilo do AirBnB.

- **Husky:** O Husky é usado para definir ganchos (hooks) Git que garantem que certas ações, como commits, atendam a determinados critérios antes de serem concluídas.

- **Lint-staged:** O Lint-staged é usado em conjunto com o Husky para executar scripts de linting e formatação apenas nos arquivos relevantes que estão sendo confirmados.

- **Tailwind CSS:** O Tailwind é um framework CSS utilitário que permite criar interfaces de usuário elegantes e responsivas com base em classes.

- **Jest:** O Jest é um framework de teste JavaScript amplamente utilizado, que oferece uma experiência de teste rápida e confiável.

- **React Testing Library:** Esta biblioteca é excelente para testar componentes React, pois enfatiza a simulação de interações do usuário e o teste de comportamentos reais.

## 💻 Pré-requisitos

- Você precisa ter o Node instalado na versão LTS
- Você precisa do Insominia para testar as rotas.
- Você precisa do Dbeaver para visualizar o banco de dados.
- Você precisa clonar o projeto com o comando  
  `git clone http://github.com/maykonsousa/NLWRanking.git`

## 🚀 Instalando o Backend

Para instalar o Servidor, siga estas etapas:

1 Acesse a pasta SERVER no projeto no terminal e rode o comando:

```typescript
npm install
```

2 crie um arquivo do tipo .env com o seguinte conteúdo

```typescript
DATABASE_URL="aqui vai a url do seu banco de dados"
```

O prisma orm está configurado para um banco de dados postgress, caso queira usar outro banco de dados como MySQL ou SQLite faça as alterações necessárias de acordo com a documentação do `Prisma`

inicie o banco de dados com o comando

```typescript
npx prisma migrate dev
```

inicie o servidor na porta `3333` utilizando o comando

```typescript
npm run dev
```

```
DATABASE_URL="aqui vai a url do seu banco de dados"
```
O prisma orm está configurado para um banco de dados postgress, caso queira usar outro banco de dados como MySQL ou SQLite faça as alterações necessárias de acordo com a documentação do `Prisma`

inicie o banco de dados com o comando
```
npx prisma migrate dev
```

inicie o servidor na porta `3333` utilizando o comando 

```
npm run dev
```
## 🚀 Instalando o Front-End

Para instalar o Front-|End, siga estas etapas:

1 Acesse a pasta WEB no projeto no terminal e rode o comando:

```typescript
npm install
```

2 crie um arquivo do tipo .env com o seguinte conteúdo

```typescript
API_URL="http://localhost:3333"
```

Para funcionar é necessário que o servidor já esteja rodando na porta `3333`

inicie o servidor na porta `3000` utilizando o comando

```typescript
npm run dev
```

Para funcionar é necessário que o servidor já esteja rodando na porta `3333`


## ☕ Usando NLW Ranking

Para usar o NLW Raking garanta que as duas aplicações estejam rodando em suas respectivas portas e acesse a url `http://localhost:3000`

Importante: Para cadastrar um usuário é necessário que a API da Rocketseat `https://skylab-api.rocketseat.com.br/public/event/nlw-copa/referral/:userId` ainda esteja funcionando e o userId passado seja um usuário válido. por exemplo, no meu caso o usuário é `maykon-216`


[⬆ Voltar ao topo](#nome-do-projeto)<br>
