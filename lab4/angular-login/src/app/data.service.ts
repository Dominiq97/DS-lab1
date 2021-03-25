import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let products = [
      {id:1, name:"faina"},
      {id:2, name:"lapte"},
      {id:3, name:"oua"},
      {id:4, name:"sunca"},
      {id:5, name:"pateu"},
    ];
    return {products};
  }
}
