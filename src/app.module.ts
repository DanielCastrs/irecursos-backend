import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { AppController } from './app.controller';
import { ProdService } from './data/service/prod.service';
import { ConfigModule } from '@nestjs/config';
import { DevService } from './data/service/dev.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
      imports: [ConfigModule],
    }),
    FuncionarioModule,
    DepartamentoModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
