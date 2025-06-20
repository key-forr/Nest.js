import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;
}
