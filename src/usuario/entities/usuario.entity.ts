import { Usuario } from './usuario.entity';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: `tb_usuario` })
export class Usuario {
  static id(id: any) {
    throw new Error('Method not implemented.');
  }
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
