# Sistema de Login e Recuperação de Senha

Este projeto consiste em um sistema de login e recuperação de senha desenvolvido em Node.js. O objetivo deste projeto é colocar em prática os conceitos de engenharia de software e gestão de projetos, fornecendo as funcionalidades básicas de login e recuperação de senha para os usuários.

O sistema é capaz de autenticar usuários com base em suas credenciais de login e recuperar a senha do usuário em caso de esquecimento ou perda. Para implementar essa funcionalidade, foram utilizadas técnicas de criptografia para garantir a segurança das informações do usuário.

## Dependências Utilizadas

- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Dotenv](https://github.com/kwhat/jnativehook)
- [Express.js](https://expressjs.com/pt-br/)
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Nodemailer](https://nodemailer.com/about/)
- [nodemailer-sendinblue-transport](https://www.npmjs.com/package/nodemailer-sendinblue-transport)
- [Sequelize](https://sequelize.org/)

## Ferramentas Utilizadas

- **Figma** - Prototipação
- **Node.js** - Linguagem usada no back-end
- **Sendinblue** - SMTP de e-mail
- **VS Code** - IDE
- **MySQL** - SGDB
- **DBeaver** - Database Tools
- **Nodemon.js** - Produtividade

## Instalação

Certifique-se de ter o Node.js instalado no seu computador. Se você ainda não o tem instalado, faça o download [aqui](https://nodejs.org/en/download/).

1° Abra o projeto no VS Code. Certifique-se de ter a última versão do VS Code instalada.

2° Abra o terminal do VS Code e execute o comando `npm install` para instalar todas as dependências necessárias.

3° Antes de executar a aplicação, você precisa criar um arquivo .env na raiz do projeto. Para isso, faça uma cópia do arquivo .env.example e renomeie a cópia para .env.

4° Abra o arquivo .env e adicione as informações referentes a cada variável global, de acordo com sua configuração específica.

5° Agora, você pode executar a aplicação. Para fazer isso, execute o comando npm start no terminal do VS Code.

6 ° A aplicação deve estar em execução. Você pode acessá-la digitando a URL http://localhost:3000 no seu navegador.

#### Além das etapas mencionadas anteriormente, é necessário criar o banco de dados antes de executar a aplicação.

Execute as queries na sua ferramenta de banco de dados de sua preferência

```sql
-- banco projeto01

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `ultimo_login` datetime DEFAULT NULL,
  `bloqueado` tinyint(1) NOT NULL DEFAULT '0',
  `excluido` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

Logo após criar o banco e a tabela é necessário iserir um usuário genérico, para isso execute a query:

```sql
INSERT INTO usuarios
(nome, data_nascimento, cpf, email, user_name, senha, ultimo_login, bloqueado, excluido)
VALUES('Teste da Silva', '01/01/1990', '123.456.789-00', 'SEU EMAIL AQUI', 'teste.silva', MD5('senha123'), '2023-04-05 21:43:41', 0, 0);
```

### Observações

Lembre-se de configurar corretamente o arquivo `.env`. É necessário criar uma conta no serviço [Sendinblue](https://pt.sendinblue.com/), para vincular o e-mail que irá realizar a funcionalidade de recuperação de senha.

#### Lembre-se de que você deve seguir todos os passos corretamente para garantir que a aplicação funcione corretamente. Se tiver algum problema durante a instalação ou execução da aplicação, verifique se seguiu todas as instruções corretamente e se todas as dependências foram instaladas corretamente.
