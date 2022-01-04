import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts'; 

@Injectable({
  providedIn: 'root'
})



export class UserService {
  // listUsers() : import ("rxjs").Observable<object>
  // {
  //   throw new Error('Method not implemented.');
  // }

   
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(baseUrl);
  } 
}
 