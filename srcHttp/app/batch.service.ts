import { Injectable } from '@angular/core';
import { Batches } from './batches';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http:  HttpClient) { }

  private _url:string = "/assets/data/data.json";

  getBatchDetails(): Observable<Batches[]>
  {
    return this.http.get<Batches[]>(this._url);
  }

   
}
