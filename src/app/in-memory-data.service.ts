import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Work } from './works';

@Injectable({
    providedIn: 'root',
  })
  export class InMemoryDataService implements InMemoryDbService{
      createDb(){
          const works =[
            { id: 1, name: 'Keep Jobs Hunting every day', des: 'before I get a offer I need to do it every day' },
            { id: 2, name: 'Project Paper-each morning', des: 'Finish paper by add some information like good graphy, table' },
            { id: 3, name: 'build my body', des:'I plan to train myself with a app called keep'},
            { id: 4, name: 'Prepare for the codesiganl interview step1', des: 'take a note on some algorithm and keep my best in this'},
            { id: 5, name: 'Prepare for codesignal interview face to face', des:'learn the video in fance book and introduce my project on Youtube, also get some basic knowlegement on O compelexcity'}
          ];
        
          return {works};
      }

      genId(heroes: Work[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
      }
  }