import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaModule } from '../tema/tema.module';
import { PostagemController } from './controllers/funcionario.controller';
import { Postagem } from './entities/funcionario.entity';
import { PostagemService } from './services/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [PostagemService],
})
export class PostagemModule {}
