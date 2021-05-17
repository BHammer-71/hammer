/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
*/

import { environment } from './environments/environment'
/** needed to connect to Cosmos Emulator.  Can be removed in production mode */
if (!environment.production) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  // console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}


import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
