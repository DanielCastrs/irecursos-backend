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
  @Column({ type: 'decimal', precision: 19, scale: 4, nullable: false })
  salarioBase: number;

  @IsNotEmpty()
  @Column({ nullable: false })
  horasTrabalhadas: number;

  @Column({ type: 'decimal', precision: 19, scale: 4})
  salarioFinal: number;

// @ManyToOne(() => Usuario, (tema) => tema.postagem, {
//   onDelete: 'CASCADE',
// })
// tema: Tema;

// @ManyToOne(() => Tema, (tema) => tema.postagem, {
//   onDelete: 'CASCADE',
// })
// tema: Tema;
 
}
