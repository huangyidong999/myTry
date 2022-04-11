import { Component, OnInit } from '@angular/core';

import { WorkService } from '../work.service';
import { Work } from '../works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
}) 
export class WorksComponent implements OnInit {
  workers: Work[] = [
    
  ];

  constructor(private workService:WorkService) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers():void{
    this.workService.getWorks().subscribe(workers => this.workers = workers)
  }


  add(name: string, des: string): void {
    name = name.trim();
    if (!name) { return; }
    this.workService.addWorks({ name,des} as Work)
      .subscribe(workers => {
        this.workers.push(workers);
      });
  }

  delete(w: Work): void {
    this.workers = this.workers.filter(h => h !== w);
    this.workService.deleteWorks(w.id).subscribe();
  }

}
