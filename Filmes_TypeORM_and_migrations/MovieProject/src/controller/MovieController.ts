import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Movie } from "../entity/Movie";

export class MovieController {
  static async create(req: Request, res: Response) {
    const { name, category, year, studioId } = req.body;
    const movieRepo = getRepository(Movie);

    const movie = movieRepo.create({ name, category, year, studio: { id: studioId } });
    await movieRepo.save(movie);

    return res.status(201).json(movie);
  }

  static async getAll(req: Request, res: Response) {
    const movieRepo = getRepository(Movie);
    const movies = await movieRepo.find({ relations: ["studio"] });

    return res.json(movies);
  }

  static async search(req: Request, res: Response) {
    const { studio, name, year, category } = req.query;
    const movieRepo = getRepository(Movie);

    const query = movieRepo.createQueryBuilder("movie")
      .leftJoinAndSelect("movie.studio", "studio");

    if (studio) query.andWhere("studio.name ILIKE :studio", { studio: `%${studio}%` });
    if (name) query.andWhere("movie.name ILIKE :name", { name: `%${name}%` });
    if (year) query.andWhere("movie.year = :year", { year });
    if (category) query.andWhere("movie.category ILIKE :category", { category: `%${category}%` });

    const movies = await query.getMany();
    return res.json(movies);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const movieRepo = getRepository(Movie);

    await movieRepo.update(id, req.body);
    const updatedMovie = await movieRepo.findOne(id, { relations: ["studio"] });

    return res.json(updatedMovie);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const movieRepo = getRepository(Movie);

    await movieRepo.delete(id);
    return res.status(204).send();
  }
}
