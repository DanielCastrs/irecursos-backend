<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

---

# IRecursos 🚀

Sistema de gerenciamento de recursos humanos desenvolvido com [NestJS](https://nestjs.com/) e [TypeORM](https://typeorm.io/) utilizando banco de dados MySQL. 
---

## Descrição

O Irecursos é uma API RESTful para controle de usuários, funcionários e departamentos de uma organização. Permite o cadastro, consulta, atualização e remoção dessas entidades, além de relacionamentos entre elas.

---

## Funcionalidades

- Cadastro, listagem, busca, atualização e remoção de *Usuários*
- Cadastro, listagem, busca, atualização e remoção de *Funcionários*
- Cálculo automático do salário final (salárioFinal=salarioBase*horasTrabalhadas)
- Cadastro, listagem, busca, atualização e remoção de *Departamentos*
- Relacionamento entre funcionários, usuários e departamentos
  
---

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
(framework Node.js)
- [TypeORM](https://typeorm.io/)
(ORM para TypeScripts)
- [MySQL](https;//www.mysql.com/)
(banco de dados relacional)
- [Class Validator](https://github.com/typestack/class-validator/blob/develop/README.md)
(validação de dados)
- [Jest](https://jestjs.io/)
(testes automatizados)

---

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositório>
cd irecursos
npm install
```
---
## Configuração

- Certifique-se de ter um banco de dados MySql rodando localmente.
- Altere as configurações de conexão no arquivo src/app.module.ts se necessário:
  
ts
// ...existing code...
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_irecurso',
  // ...existing code...
}),
// ...existing code...

- O banco será sincronizado automaticamente ao iniciar a aplicação.

## Como rodar o projeto 

### Desenvolvimento

```bash
npm run start:dev
```

## Estrutura do Projeto

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

## Endpoints Principais

- /usuarios-Gerenciamento de usuários
- /funcionarios-Gerenciamento de funcionários
- /departamentos-Gerenciamento de departamentos

## Licença


