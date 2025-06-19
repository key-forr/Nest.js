import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import type { Request, Response } from 'express';

@Controller({
  path: 'movies',
  host: ['google.com', '127.0.0.1'],
})
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  public findAll(@Query('genre') genre: string) {
    return genre
      ? `Фільми в жанрі ${genre}`
      : [
          {
            title: 'Fight club',
          },
          {
            title: 'Marvel',
          },
        ];
  }

  @Post('users/:userId/movies/:movieId/review')
  public createReview(
    @Param('userId') userId: string,
    @Param('movieId') movieId: string,
    @Body('review') review: string,
  ) {
    return {
      userId,
      movieId,
      review,
    };
  }

  @Get('create-json')
  public createMyJson(@Query() query: any) {
    return JSON.stringify(query);
  }

  @Post('create')
  public create(@Body() body: object) {
    return body;
  }

  @Get('headers')
  public getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get('user-agent')
  public getUserAgent(@Headers('user-agent') userAgent: string) {
    return userAgent;
  }

  @Get('request/:id')
  public getRequest(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
      body: req.body,
    };
  }

  @Get('response')
  public getResponse(@Res() res: Response) {
    res.status(201).json({ message: 'Hello' });
  }
}
