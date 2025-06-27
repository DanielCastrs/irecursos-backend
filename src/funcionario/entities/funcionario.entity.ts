import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: `tb_funcionario` })
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 5000, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  salarioBase: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  horasTrabalhadas: number;

  // @ManyToOne(() => Tema, (tema) => tema.postagem, {
  //   onDelete: 'CASCADE',
  // })
  // tema: Tema;

  // @ManyToOne(() => Tema, (tema) => tema.postagem, {
  //   onDelete: 'CASCADE',
  // })
  // tema: Tema;
}
