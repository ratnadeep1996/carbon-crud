import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url = "http://localhost:8080/mymessenger/syncsort/";
  constructor(private http: HttpClient) { }
  //error handling function for api call
  handleError = (error: HttpErrorResponse) => {
    alert(error.error && error.error.message || 'Server Error');
    return Observable.throw(error.error && error.error.message || 'Server Error');
  }

  login(login: any): Observable<any> {
    return this.http.post<any>(this.base_url + `api/login`, login, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

}
