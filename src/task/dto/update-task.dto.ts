import { IsBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Назва задачі повинна бути рядком' })
  @IsNotEmpty({ message: 'Поле не може бути пустим' })
  @Length(2, 10)
  title: string;

  @IsBoolean({ message: 'Статус повинен бути булевим виразом' })
  isCompleted: boolean;
}
