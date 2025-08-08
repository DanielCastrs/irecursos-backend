import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'daniel',
      database: 'db_irecurso',
      entities: [Departamento, Funcionario, Usuario],
      synchronize: true,
    };
  }
}
