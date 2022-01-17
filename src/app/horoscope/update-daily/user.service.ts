import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { map, Observable } from 'rxjs';
 
const baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';  
// const baseUrl: string = 'http://192.168.1.148:3000/signs';    


@Injectable({
  providedIn: 'root'    
})

export class UserService {
  // listUsers() : import ("rxjs").Observable<object>
  // {
  //   throw new Error('Method not implemented.');
  // }


   
  constructor(private http: HttpClient) { }

  // findOne(id: number): Observable<User> {
  //   return this.http.get('http://192.168.1.216:8085' + id).pipe(map(user:User) => user)
  // }

  listUsers(){
    return this.http.get(baseUrl); 
  } 
}
 