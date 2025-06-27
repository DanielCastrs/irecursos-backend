import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioController } from './controllers/funcionario.controller';
import { Funcionario } from './entities/funcionario.entity';
import { FuncionarioService } from './services/funcionario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario]), DepartamentoModule, UsuarioModule],
  providers: [FuncionarioService],
  controllers: [FuncionarioController],
  exports: [FuncionarioService],
})
export class FuncionarioModule {}
