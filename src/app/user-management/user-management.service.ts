import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userprofile } from '../interface/userprofile';

@Injectable({
  providedIn: 'root'
})
 
export class UserManagementService { 
  baseUrl: string = environment.baseUrl; 
  jwthelper = new JwtHelperService();
  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.getToken()}`
  })
  options = {headers: this.headers};


  constructor( private http: HttpClient) { }   

  getToken(){
    var mytoken = localStorage.getItem('token') || undefined;
    return mytoken;
  } 

  getUserByToken(token:any){
  var decodedToken:any = this.jwthelper.decodeToken(token);
  return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  }

  getAllusers(){ 
    return this.http.get(this.baseUrl + '/api/UserManager/get-users-list', this.options);
  }

  getUserById(id:any) {
    return this.http.get(this.baseUrl + '/api/UserManager/get-user-by-id?Id='+id, this.options);
  }

  getAllRoles(){
    return this.http.get(this.baseUrl + '/api/UserManager/get-roles-list', this.options);
  }

  //post new user
  create(data: any): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    })
    let options = {headers: headers};
    return this.http.post(this.baseUrl + '/api/UserManager/create-user', data, options)
  };   

}   
