import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Departamento } from '../../departamento/entities/departamento.entity';

@Entity({ name: `tb_funcionario` })
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 19, scale: 4, nullable: false })
  salarioBase: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  horasTrabalhadas: number;

  @Column({ type: 'decimal', precision: 19, scale: 4})
  salarioFinal: number;

@ManyToOne(() => Usuario, (usuario) => usuario.funcionario, {
  onDelete: 'CASCADE',
})
usuario: Usuario;

@ManyToOne(() => Departamento, (departamento) => departamento.funcionario, {
  onDelete: 'CASCADE',
})
departamento: Departamento;
}
