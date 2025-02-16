import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from './exercise57/Fashion';

@Injectable({
  providedIn: 'root',
})
export class FashionAPIService {
  constructor(private _http: HttpClient) {}
  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/fashions', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getFashionsGroupByStyle(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/fashionsgroupbystyle', requestOptions).pipe(
      map((res) => JSON.parse(res) as any),
      retry(3),
      catchError(this.handleError)
    );
  }
  getOneFashionGroupByStyle(style: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .get<any>('/fashionsgroupbystyle/' + style, requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as any),
        retry(3),
        catchError(this.handleError)
      );
  }
  getFashionById(fashionId: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>(`/fashion/${fashionId}`, requestOptions).pipe(
      map((res) => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }
  getFashionByStyle(fashionStyle: any): Observable<any> {
    const queryParams = new HttpParams().set('style', fashionStyle);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
      params: queryParams,
    };
    return this._http.get<any>(`/fashions/style`, requestOptions).pipe(
      map((res) => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }
  postFashion(aFashion: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/fashions', JSON.stringify(aFashion), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Fashion),
        retry(3),
        catchError(this.handleError)
      );
  }
  putFashion(aFashion: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .put<any>('/fashions', JSON.stringify(aFashion), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Fashion),
        retry(3),
        catchError(this.handleError)
      );
  }
  deleteFashion(fashionId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.delete<any>(`/fashion/${fashionId}`, requestOptions).pipe(
      map((res) => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
