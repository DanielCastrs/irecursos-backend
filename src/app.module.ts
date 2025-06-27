import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from './departamento/entities/departamento.entity';
import { DepartamentoModule } from './departamento/departamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: `mysql`,
      host: `localhost`,
      port: 3306,
      username: `root`,
      password: `Sk8erboy12!`,
      database: `db_irecurso`,
      entities: [Departamento],
      synchronize: true,
      logging: true,
    }),
    DepartamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
