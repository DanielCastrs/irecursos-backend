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
import { Departamento } from '../entities/departamento.entity';
import { DepartamentoService } from './../services/departamento.service';

@Controller('/departamentos')
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Departamento[]> {
    return this.departamentoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Departamento> {
    return this.departamentoService.findById(id);
  }

  @Get('/departamento/:departamento')
  @HttpCode(HttpStatus.OK)
  findAllByDepartamento(
    @Param('departamento') departamento: string,
  ): Promise<Departamento[]> {
    return this.departamentoService.findAllByDepartamento(departamento);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() departamento: Departamento): Promise<Departamento> {
    return this.departamentoService.create(departamento);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() departamento: Departamento): Promise<Departamento> {
    return this.departamentoService.update(departamento);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.departamentoService.delete(id);
  }
}
