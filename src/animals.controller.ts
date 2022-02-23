import { Controller, Get, Query } from '@nestjs/common';
import { CustomInject } from 'nestjs-custom-injector';
import {
  AnimalProviderInteface,
  ANIMAL_PROVIDER,
} from './animal-provider.interface';

@Controller('animals')
export class AnimalsController {
  @CustomInject(ANIMAL_PROVIDER, { multi: true })
  private animalProviders!: AnimalProviderInteface[];

  @Get('animal-types')
  animalTypes() {
    return this.animalProviders.map((animalProvider) => animalProvider.type);
  }

  @Get('what-says-animals')
  whatSaysAnimals() {
    return this.animalProviders.map(
      (animal) => `${animal.type} say ${animal.say()}`,
    );
  }

  @Get('who-say')
  whoSay(@Query('voice') voice: string) {
    const animal = this.animalProviders.find(
      (animal) => animal.say() === voice,
    );
    if (!animal) {
      return { error: `I don't know who say ${voice}` };
    }
    return `${animal.type} say ${animal.say()}`;
  }
}
