import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Work } from './works';

@Injectable({
    providedIn: 'root',
  })
  export class InMemoryDataService implements InMemoryDbService{
      createDb(){
          const works =[
            { id: 1, name: 'SpringBoot-Learning 10days-each afternoon', des: 'I need to finish it and start my job hunting' },
            { id: 2, name: 'Project Paper-each morning', des: 'Finish paper in this week' },
            { id: 3, name: 'Angular4 project upload and update-af', des:'just update this to github, then it will be done'},
            { id: 4, name: 'plan build for english improvement-each evening', des:'practice listing every morning, try '},
            { id: 5, name: 'Find a part time job near by my place', des:'I need some money to fed myself'},
            { id: 6, name: 'build my body', des:'I plan to train myself with a app called keep'}
          ];
        
          return {works};
      }

      genId(heroes: Work[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
      }
  }