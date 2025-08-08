import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionario } from '../../funcionario/entities/funcionario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_departamento' })
export class Departamento {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 45, nullable: false })
  @ApiProperty()
  nome_departamento: string;

  @ApiProperty()
  @OneToMany(() => Funcionario, (funcionario) => funcionario.departamento)
  funcionario: Funcionario[];
}
