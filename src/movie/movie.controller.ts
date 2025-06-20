import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  public async findAll() {
    return this.movieService.findAll();
  }

  @Post()
  public async create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }
}
