import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';
import { Funcionario } from '../entities/funcionario.entity';
import { FuncionarioService } from '../services/funcionario.service';

@Controller(`/funcionario`)
export class FuncionarioController {
  constructor(private readonly FuncionarioService: FuncionarioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Funcionario[]> {
    return this.FuncionarioService.findAll();
  }

  @Get(`/:id`)
  @HttpCode(HttpStatus.OK)
  findById(@Param(`id`, ParseIntPipe) id: number): Promise<Funcionario> {
    return this.FuncionarioService.findById(id);
  }

  @Get(`/nome/:nome`)
  @HttpCode(HttpStatus.OK)
  findAllByNome(@Param(`nome`) nome: string): Promise<Funcionario[]> {
    return this.FuncionarioService.findAllByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.FuncionarioService.create(funcionario);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() funcionario: Funcionario): Promise<Funcionario> {
    return this.FuncionarioService.update(funcionario);
  }

  @Delete(`/:id`)
  @HttpCode(HttpStatus.OK)
  delete(@Param(`id`, ParseIntPipe) id: number) {
    return this.FuncionarioService.delete(id);
  }
}
