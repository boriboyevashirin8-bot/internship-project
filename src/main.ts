import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import dotenv from "dotenv";
import { ValidationPipe } from '@nestjs/common';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
  .setTitle('fields')
  .setDescription('The fields and ndvi API description')
  .setVersion('1.0')
  .build()
  const document = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(process.env.PORT ?? 3000, ()=>console.log(`Server is running on PORT: ${process.env.PORT}`));
}
bootstrap();
