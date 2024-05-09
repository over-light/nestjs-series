import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';
// import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, {
  //   bufferLogs:true,
  // });

  const app = await NestFactory.create(AppModule);

  const {httpAdapter} = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter)
)
  // app.useLogger(app.get(MyLoggerService))
  app.enableCors()
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
 