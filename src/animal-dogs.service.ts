import { Injectable } from '@nestjs/common';
import { AnimalProviderInteface } from './animal-provider.interface';

@Injectable()
export class AnimalDogsService implements AnimalProviderInteface {
  type = 'dog';
  say(): string {
    return 'woof';
  }
}
