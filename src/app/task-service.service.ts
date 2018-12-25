import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

options: any;
headers: any;

  LogInFormComponent(user: UserModel): Observable<any> {
    // tslint:disable-next-line:no-shadowed-variable
    const url = 'http://todo.digitalcube.rs/user/login?username=' + user.UserName + '&password=' + user.Password;
    return this.http.post<UserModel>(url, null);
  }

  LogOut(token: any): Observable<any> {
    const url = 'http://todo.digitalcube.rs/user/logout';

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('content-Type', 'application/json;odata=verbose');
    headers = headers.append('accept', 'application/json;odata=verbose');

    return this.http.post<any>(url, null, { headers });
  }

  getTasks (token: any): Observable<any> {
    const url = 'http://todo.digitalcube.rs/api/todos';
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('content-Type', 'application/json;odata=verbose');
    headers = headers.append('accept', 'application/json;odata=verbose');

    return this.http.get<any>(url, { headers });
  }

  addTaskToList (token: any, content: any): Observable<any> {
    const url = 'http://todo.digitalcube.rs/api/todos';

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('content-Type', 'application/json;odata=verbose');
    headers = headers.append('accept', 'application/json;odata=verbose');

    return this.http.put<any>(url,  JSON.stringify(content) , { headers });
  }

  taskDone (token: any, id: any, content: any): Observable<any> {
    const url = 'http://todo.digitalcube.rs/api/todos/' + id;

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('content-Type', 'application/json;odata=verbose');
    headers = headers.append('accept', 'application/json;odata=verbose');

    return this.http.patch<any>(url,  JSON.stringify(content) , { headers });
  }

  deleteTask (token: any, id: any): Observable<any> {
    const url = 'http://todo.digitalcube.rs/api/todos/' + id;

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('content-Type', 'application/json;odata=verbose');
    headers = headers.append('accept', 'application/json;odata=verbose');

    return this.http.delete<any>(url, { headers });
  }
}



