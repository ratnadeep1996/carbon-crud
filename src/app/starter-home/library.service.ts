import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  base_url = "http://localhost:8080/mymessenger/syncsort/";

  constructor(private http: HttpClient) { }
  //error handling function for api call
  handleError = (error: HttpErrorResponse) => {
    alert(error.error && error.error.message || 'Server Error');
    return Observable.throw(error.error && error.error.message || 'Server Error');
  }

  getLibraryRecords(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(this.base_url + `api/libraryrecords?limit=${limit}&&offset=${offset}`, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  getBooks(): Observable<any> {
    return this.http.get<any>(this.base_url + `api/books`, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  createEntry(data: any): Observable<any> {
    return this.http.post<any>(this.base_url + `api/libraryrecords`, data, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  deleteEntry(id:number):Observable<any>{
    return this.http.delete<any>(this.base_url + `api/libraryrecords/${id}`, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  getLibraryRecordById(id:number):Observable<any>{
    return this.http.get<any>(this.base_url + `api/libraryrecords/${id}`, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  updateEntry(id:number,data:any):Observable<any>{
    return this.http.put<any>(this.base_url + `api/libraryrecords/${id}`, data, { observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }
}
