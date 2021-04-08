import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  //80포트를 열어주기 위한 작엄 -- 도커 진행예정
  //await app.listen(80);

}
bootstrap();
