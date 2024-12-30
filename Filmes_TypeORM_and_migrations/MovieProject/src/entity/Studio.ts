import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movie } from "./Movie";

@Entity()
export class Studio {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Movie, (movie) => movie.studio)
  movies: Movie[];
}
