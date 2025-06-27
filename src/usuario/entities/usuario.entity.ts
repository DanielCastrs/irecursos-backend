import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';

@Entity({ name: `tb_usuario` })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ length: 12, nullable: false })
  senha: string;

  @Column({ length: 45, nullable: true })
  foto: string;

  @OneToMany(() => Funcionario, (funcionario) => funcionario.usuario)
  funcionario: Funcionario[];
}
