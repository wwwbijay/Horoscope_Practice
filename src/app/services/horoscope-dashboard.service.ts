import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts'
@Injectable({
  providedIn: 'root'
})

export class HoroscopeDashboardService {

  constructor( private http: HttpClient) { }

  listUsers(){
    return this.http.get(baseUrl);
  }
}
 