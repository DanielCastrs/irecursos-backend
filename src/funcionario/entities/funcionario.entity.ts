import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Departamento } from '../../departamento/entities/departamento.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: `tb_funcionario` })
export class Funcionario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 19, scale: 4, nullable: false })
  @ApiProperty()
  salarioBase: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  @ApiProperty()
  horasTrabalhadas: number;

  @Column({ type: 'decimal', precision: 19, scale: 4 })
  @ApiProperty()
  salarioFinal: number;

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.funcionario, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ApiProperty({ type: () => Departamento })
  @ManyToOne(() => Departamento, (departamento) => departamento.funcionario, {
    onDelete: 'CASCADE',
  })
  departamento: Departamento;
}
