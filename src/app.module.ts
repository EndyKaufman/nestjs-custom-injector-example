import { Module } from '@nestjs/common';
import { CustomInjectorModule } from 'nestjs-custom-injector';
import { AnimalCatsService } from './animal-cats.service';
import { AnimalDogsService } from './animal-dogs.service';
import { ANIMAL_PROVIDER } from './animal-provider.interface';
import { AnimalsController } from './animals.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CustomInjectorModule.forRoot(),
    CustomInjectorModule.forFeature({
      providers: [{ provide: ANIMAL_PROVIDER, useClass: AnimalCatsService }],
    }),
    CustomInjectorModule.forFeature({
      providers: [
        { provide: ANIMAL_PROVIDER, useValue: new AnimalDogsService() },
      ],
    }),
  ],
  controllers: [AppController, AnimalsController],
  providers: [AppService],
})
export class AppModule {}
