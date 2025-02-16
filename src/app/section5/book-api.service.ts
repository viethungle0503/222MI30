import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBook, IOldBook } from './interface/Book';

@Injectable({
  providedIn: 'root',
})
export class BookAPIService {
  constructor(private _http: HttpClient) {}
  // Old DatabaseBooks
  getOldBooks(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/booksold', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IOldBook>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getOldBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/booksold/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IOldBook),
      retry(3),
      catchError(this.handleError)
    );
  }
  postOldBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/booksold', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IOldBook>),
        retry(3),
        catchError(this.handleError)
      );
  }
  putOldBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/booksold', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IOldBook>),
        retry(3),
        catchError(this.handleError)
      );
  }
  deleteOldBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.delete<any>('/booksold/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IOldBook>),
      retry(3),
      catchError(this.handleError)
    );
  }
  // New DatabaseBooks
  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/books', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/books/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IBook),
      retry(3),
      catchError(this.handleError)
    );
  }
  postBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/books', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IBook>),
        retry(3),
        catchError(this.handleError)
      );
  }
  putBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/books', JSON.stringify(aBook), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<IBook>),
        retry(3),
        catchError(this.handleError)
      );
  }
  deleteBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.delete<any>('/books/' + bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
