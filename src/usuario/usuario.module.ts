import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemController } from './controllers/usuario.controller';
import { Postagem } from './entities/usuario.entity';
import { PostagemService } from './services/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [PostagemService],
  controllers: [PostagemController],
  exports: [PostagemService],
})
export class PostagemModule {}
