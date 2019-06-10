import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Icountry
{
  
  name:string;
  code:string;
  test:any;
}
@Injectable()
export class DataService{
  ROOT_URL = './assets/data.json';

  constructor(private http: HttpClient) {}

  getDataService() :any{
    var observable = this.http.get(this.ROOT_URL).map(
        (response: Response) =>response['result']);
        return observable;
  }
}