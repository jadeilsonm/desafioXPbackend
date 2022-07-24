# Desafio XP backend

Aplicação de investimentos e conta digital, simulando um dia a dia da vida de um dev em uma empresa de investimentos.

## 🚀 Começando


Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

* SSH
```
git clone git@github.com:jadeilsonm/desafioXPbackend.git
```

* HTTPS
```
git clone https://github.com/jadeilsonm/desafioXPbackend.git
```


## 📋 Pré-requisitos

- Docker - (opcional)*
- nodejs na versão 16
- Banco de dados MySql

## 🔧 Instalação


Entre no diretorio desafioXPbackend:
```sh
cd desafioXPbackend
```
Instale as dependencias do projetos:
```sh
npm install
```
Crie um databese no mysql, segue exemplo:

```
DROP SCHEMA IF EXISTS databaseXP;
CREATE SCHEMA IF NOT EXISTS databaseXP;
```

Crie o arquivo .env, seguindo o exemplos abaixo ou se preferir renomei o arquivo .env.exemplo e  preencha os dados a baixo:
```
SERVER_PORT: 

JWT_SECRET: 

DB_PORT: 
DB_HOST: 
DB_USER: 
DB_PASSWORD: 
DB_DATABASE: 
```
Execute a migration para criar as tabelas no database:
```sh
npm run migration:run
```
Transcreva os arquivos .ts para arquivos .js:
```sh
npm run postinstall
```
Agora inicie o serviço:
```sh
npm run start
```
Se tudo ocorreu bem ira mostrar um console ***Server up*** no terminal.

Se preferir poderia testar essa aplicação já no ambiente de produção seguindo para a seguinte url:

```url
https://desafioxpjadeilson.herokuapp.com/
```
Para obter mais informações sobre os endpoints var para a seguinte URL:
```url
https://desafioxpjadeilson.herokuapp.com/docs
```

## 🐋 Executando com docker:

Para executar essa aplicação via docker vc deve seguir os caminhos abaixo.

Estar dentro do diretorio do projeto, se não estiver realize o seguinte comando a baixo no seu terminal:
```sh
cd /desafioXPbackend
```
Inicialize o compose do docker por meio do seu terminal:
```sh
docker-compose up -d
```
Após inicializar os container docker modifique/crie o arquivo .env **Observação** o user e password do container docker mysql são respectivamente ('root', 'password'):
```
SERVER_PORT: 

JWT_SECRET: 

DB_PORT: 
DB_HOST: 
DB_USER: 
DB_PASSWORD: 
DB_DATABASE: 
```
Crie um databese no mysql, segue exemplo, **Observação** para realizar esse passo você pode conectar como por exemplo no [workbench](https://www.mysql.com/products/workbench/) ou em outra ferramenta de sua preferencia:

```
DROP SCHEMA IF EXISTS databaseXP;
CREATE SCHEMA IF NOT EXISTS databaseXP;
```
Voltando ao seu terminal, vamos entrar no bash do nosso container:

```sh
docker exec -it desafioXP bash
```
Vamos agora instalar as dependencias, dentro do bash do container realize o seguinte comando:

```sh
npm install
```
Apos instalar as dependencias vamos criar as tabelas no nosso database:

```sh
npm run migration:run
```
Transcreva os arquivos .ts para arquivos .js:
```sh
npm run postinstall
```
Agora inicie o serviço:
```sh
npm run start
```
Se tudo ocorreu bem ira mostrar a seguinte mensagem no seu console ***Server up***.
Após isso e podera abrir seu navegador ou o postman se preferir e começar consumir os endpoints.

### ⌨️ E testes de estilo de codificação

Para fazer a análise de código, com o lint.

```sh
npm run lint
```

## 📦 Desenvolvimento

Neste projeto tive como grande desafio o relacionamento entre os dados, onde decide resolver com 3 tabelas, tabelas essas por nome de accounts, actives e investiments.

Foi utilizado o modelo MSC para dividir as responsabilidades de cada funções, camada da aplicação dando assim mais visibilidade e legibilidade para cada arquivo.

A utilização do token JWT para fazer a verificação da autorização do usaurio em algumas operações como sacar e depositar dinheiro, alem de comprar ativos.

Como forma de minimizar erros em no desenvolvimeto foi utilizado o typeScript para tipar variaveis e paramentro.

## 🛠️ Construído com:

ferramentas usadas para criar o projeto.

* [NodeJS](https://nodejs.org/en/) - É uma compilação empacotada do mecanismo JavaScript.
* [NPM](https://www.npmjs.com/) - Gerente de Dependência.
* [TypeScript](https://www.typescriptlang.org/) - Usada para tipagem dos paramentros e as variaveis.
* [TypeOrm](https://typeorm.io/) - ORM responsavel por gerar as migrations e relações entre os models e o banco de dados.
* [MySQL](https://www.mysql.com/) - Utilizado para armazenar os dados.
* [Heroku](https://www.heroku.com/) - Utilizado para realizar o deploy da aplicaçaõ.
* [JWT](https://jwt.io/) - Utilizado como padrão para autenticação
* [Swagger](https://swagger.io/) - Utilizado para documentação.
* [Docker](https://www.docker.com/) - Utilizado para produção e ou testes da aplicação.

## 📄 Documentação

Siga ate o link abaixo para ler a documetação completa:
```
https://desafioxpjadeilson.herokuapp.com/docs
```

## 📌 Versão

* versão 1.0

* Foi utilizado [github](https://github.com/) para controle de versão e armazenamento de codigo fonte.

## ✒️ Autores

* **desenvolvedor** - *Trabalho Inicial* - [desenvolvedor](https://github.com/jadeilsonm)


## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma café ☕ 
* Obrigado publicamente 🤓.

