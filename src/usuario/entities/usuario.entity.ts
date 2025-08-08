import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: `tb_usuario` })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @Column({ length: 45, nullable: false })
  @ApiProperty({ example: 'email@email.com.br' })
  email: string;

  @IsNotEmpty()
  @Column({ length: 12, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 45, nullable: true })
  @ApiProperty()
  foto: string;

  @ApiProperty()
  @OneToMany(() => Funcionario, (funcionario) => funcionario.usuario)
  funcionario: Funcionario[];
}
