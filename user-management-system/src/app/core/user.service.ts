import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { apiUrl } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(`${apiUrl}users`).pipe(
      map((response: any) => {
        console.log('Response:', response)
        return response;
      })
    );
}
  getUserById(user_id:number): Observable<any> {
    return this.http.get<any>(`${apiUrl}users/${user_id}`).pipe(
      map((response: any ) => {
        console.log('Response:', response)
        return response;
      })
    )
  }
  createUser(body:any): Observable<any> {
    return this.http.post<any>(`${apiUrl}users/create`, body).pipe(
      map((response: any) => {
        console.log('Response:', response)
        return response;
      })
    )
  }
  updateUser(body:any): Observable<any> {
    return this.http.put<any>(`${apiUrl}users/update`, body).pipe(
      map((response: any) => {
        console.log('Response:', response)
        return response;
      })
    )
  }
  deleteUser(user_id:number): Observable<any> {
    return this.http.delete<any>(`${apiUrl}users/${user_id}`).pipe(
      map((response: any) => {
        console.log('Response:', response)
        return response;
      })
    )
  }
}

