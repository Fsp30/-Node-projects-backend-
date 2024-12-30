import {Entity,PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn} from "typeorm"
import { Studio } from "./Studio"
import {Category} from './Category'

@Entity()
export class Movie {
@PrimaryGeneratedColumn("uuid")
id: string;

@Column()
name: string;

@Column("text")
description: string;

@ManyToOne(() => Category, (category) => category.movies)
@JoinColumn({ name: "category_id" })
category: Category;

@ManyToOne(() => Studio, (studio) => studio.movies)
@JoinColumn({ name: "studio_id" })
studio: Studio;
}
