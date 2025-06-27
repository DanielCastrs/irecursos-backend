import { Funcionario } from './../entities/funcionario.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';


@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ) {}

  async findAll(): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find({
      relations: {
      usuario: true,
      departamento: true
      },
    });
  }

  async findById(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOne({
      where: {
        id,
      },
    relations: {
      usuario: true,
      departamento: true
      },
    });

    if (!funcionario)
      throw new HttpException(`Funcionario não encontrado!`, HttpStatus.NOT_FOUND);
    return funcionario;
  }

    async findAllByNome(nome: string): Promise<Funcionario[]> {
    return await this.funcionarioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
      usuario: true,
      departamento: true
      }
    });
  }


  async create(funcionario: Funcionario): Promise<Funcionario> {
    funcionario.salarioFinal=funcionario.salarioBase*funcionario.horasTrabalhadas

    return await this.funcionarioRepository.save(funcionario);
  }

  async update(funcionario: Funcionario): Promise<Funcionario> {
    await this.findById(funcionario.id);

    funcionario.salarioFinal=funcionario.salarioBase*funcionario.horasTrabalhadas

    return await this.funcionarioRepository.save(funcionario);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.funcionarioRepository.delete(id);
  }
}
