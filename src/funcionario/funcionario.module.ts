import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from '../tema/tema.module';
import { PostagemController } from './controllers/funcionario.controller';
import { Funcionario, Postagem } from './entities/funcionario.entity';
import { FuncionarioService, PostagemService } from './services/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario]), ],
  providers: [FuncionarioService],
  controllers: [FuncionarioController],
  exports: [FuncionarioService],
})
export class PostagemModule {}
