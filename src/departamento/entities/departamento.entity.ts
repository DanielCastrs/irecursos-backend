import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity({ name: 'tb_departamento' })
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  nome_departamento: string;

  @OneToMany(() => Funcionario, (funcionario) => funcionario.departamento)
  funcionario: Funcionario[]
}
