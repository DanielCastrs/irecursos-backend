<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

---

# 🚀IRecursos 

Sistema de gerenciamento de recursos humanos desenvolvido com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/), utilizando banco de dados **MySQL**.

---

## 📝 Descrição

O **IRecursos** é uma API RESTful para controle de usuários, funcionários e departamentos de uma organização. Permite operações completas de cadastro, consulta, atualização e remoção dessas entidades, além de gerenciar os relacionamentos entre elas.

---

## ✅ Funcionalidades

- CRUD completo de **Usuários**
- CRUD completo de **Funcionários**
- Cálculo automático do salário final: `salarioFinal = salarioBase * horasTrabalhadas`
- CRUD completo de **Departamentos**
- Relacionamentos entre usuários, funcionários e departamentos

---

## 🛠 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework Node.js
- [TypeORM](https://typeorm.io/) — ORM para TypeScript
- [MySQL](https://www.mysql.com/) — Banco de dados relacional
- [Class Validator](https://github.com/typestack/class-validator) — Validação de dados
- [Jest](https://jestjs.io/) — Testes automatizados

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositório>
cd irecursos
npm install
```

---

## ⚙️ Configuração

1. Certifique-se de ter um banco de dados **MySQL** rodando localmente.
2. Ajuste as configurações no arquivo `src/app.module.ts`, se necessário:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_irecurso',
  synchronize: true,
  // outras opções...
}),
```

> Obs.: O banco será sincronizado automaticamente ao iniciar a aplicação.

---

## 🚀 Como rodar o projeto

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

---

## 🧱 Estrutura do Projeto

```
src/
  app.module.ts
  main.ts
  departamento/
    controllers/
    entities/
    services/
  funcionario/
    controllers/
    entities/
    services/
  usuario/
    controllers/
    entities/
    services/
test/
```

---

## 🔗 Endpoints Principais

- `/usuarios` — Gerenciamento de usuários
- `/funcionarios` — Gerenciamento de funcionários
- `/departamentos` — Gerenciamento de departamentos

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

## 📌 Autores
Brenndha Cabral | Daniel Souza | Kannanda Andrade | Monique Ohana | Rafael Selles | Sara Silva
