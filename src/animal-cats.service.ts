import { Injectable } from '@nestjs/common';
import { AnimalProviderInteface } from './animal-provider.interface';

@Injectable()
export class AnimalCatsService implements AnimalProviderInteface {
  type = 'cat';
  say(): string {
    return 'meow';
  }
}
