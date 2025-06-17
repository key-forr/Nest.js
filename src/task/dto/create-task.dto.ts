import {
  IsNotEmpty,
  IsString,
  Length,
  // MaxLength,
  // MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  // @MinLength(2)
  // @MaxLength(10)
  @Length(2, 10)
  title: string;
}
