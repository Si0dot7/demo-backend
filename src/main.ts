import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Project-alpha')
    .setDescription('Alpha API description')
    .setVersion('1.0')
    .addTag('Project-alpha')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
