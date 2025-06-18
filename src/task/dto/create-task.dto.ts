import {
  IsArray,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  IsUUID,
  isUUID,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { StartsWith } from '../decorators/starts-with.decorator';

const TaskTag = {
  WORK: 'work',
  STUDY: 'study',
  HOME: 'home',
} as const;

export type TaskTagType = (typeof TaskTag)[keyof typeof TaskTag];
export const TaskTagValues = Object.values(TaskTag);

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @StartsWith('new')
  @Length(2, 25)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt({ message: 'Поле priority очікує тип int' })
  @IsPositive({ message: "Поле priority не може бути від'ємним" })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Поле tags очікує масив' })
  @IsIn(TaskTagValues, {
    each: true,
    message: 'Кожен елемент в tags має бути одним з дозволених значень',
  })
  @IsOptional()
  tags: TaskTagType[];

  // @IsString({ message: 'Поле password очікує string' })
  // @MinLength(6)
  // @Matches(/(?=.*[0-9])(?=.*[A-Z])/, {
  //   message:
  //     'Пароль повинен містити латинські букви та хоча б одну велику букву',
  // })
  // @IsOptional()
  // password: string;

  // @IsUrl(
  //   {
  //     protocols: ['http', 'ws'],
  //     require_valid_protocol: true,
  //     host_whitelist: ['google.com', 'keytostream'],
  //     host_blacklist: ['magaz.com'],
  //   },
  //   { message: 'Не коректний формат url' },
  // )
  // @IsOptional()
  // websiteUrl: string;

  // @IsUUID('4', { message: 'Не коректний uuid' })
  // userId: string;
}
