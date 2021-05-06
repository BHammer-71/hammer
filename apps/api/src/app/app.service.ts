import { Injectable } from '@nestjs/common';
import { Message } from '@hammer/api-interfaces';
// import { Authenticate } from '@hammer/shared/data-access';
// import { db } from '@hammer/shared/data-access';

@Injectable()
export class AppService {
  // private users = db.users;
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
