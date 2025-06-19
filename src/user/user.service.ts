import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public async test(): Promise<object> {
    return { message: 'Test module' };
  }
}
