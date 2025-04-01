import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Cho phép origin của frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Các phương thức HTTP được phép
    credentials: true, // Nếu cần gửi cookie hoặc header xác thực
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
