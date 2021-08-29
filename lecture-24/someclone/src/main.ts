import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const another = await NestFactory.create(AppModule);
  await another.listen(5000);
}

bootstrap();
