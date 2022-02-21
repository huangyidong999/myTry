import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import{ Work } from './works';

@Injectable({ providedIn: 'root' })
export class WorkService{
    private worksUrl = "api/works";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }
    
    getWorks():Observable<Work[]>{
        return this.http.get<Work[]>(this.worksUrl);
    }

    addWorks(work:Work): Observable<Work>{
        return this.http.post<Work>(this.worksUrl,work,this.httpOptions);
    }

    deleteWorks(id:number): Observable<Work>{
        const url = `${this.worksUrl}/${id}`;
        return this.http.delete<Work>(url, this.httpOptions);
    }
    
    updateHero(work:Work): Observable<any> {
        return this.http.put(this.worksUrl, work, this.httpOptions);
    }
}