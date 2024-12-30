import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Movie } from "./Movie"

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Movie, (movie) => movie.category)
  movies: Movie[];
}
