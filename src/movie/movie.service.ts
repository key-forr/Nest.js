import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  public constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  public async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find();
  }

  public async create(dto: CreateMovieDto): Promise<MovieEntity> {
    try {
      const movie = await this.movieRepository.create(dto);
      return await this.movieRepository.save(movie);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create movie');
    }
  }
}
