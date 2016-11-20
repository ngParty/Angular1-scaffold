import {Injectable} from 'ng-metadata/core'
import { Hero } from './hero';

@Injectable()
export class HeroesService {
  get() {
    return [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Spiderman'),
    ];
  }
}

