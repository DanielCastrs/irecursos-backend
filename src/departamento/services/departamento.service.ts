import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Departamento } from '../entities/departamento.entity';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ) {}
  async findAll(): Promise<Departamento[]> {
    return await this.departamentoRepository.find();
  }

  async findById(id: number): Promise<Departamento> {
    const departamento = await this.departamentoRepository.findOne({
      where: {
        id,
      },
    });

    if (!departamento)
      throw new HttpException(
        'Departamento não encontrado.',
        HttpStatus.NOT_FOUND,
      );
    return departamento;
  }

  async findAllByDepartamento(departamento: string): Promise<Departamento[]> {
    return await this.departamentoRepository.find({
      where: {
        nome_departamento: ILike(`%${departamento}%`),
      },
    });
  }

  async create(departamento: Departamento): Promise<Departamento> {
    return await this.departamentoRepository.save(departamento);
  }

  async update(departamento: Departamento): Promise<Departamento> {
    await this.findById(departamento.id);
    return await this.departamentoRepository.save(departamento);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.departamentoRepository.delete(id);
  }
}
