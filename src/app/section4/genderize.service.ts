import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, finalize, retry, map } from 'rxjs/operators';
import { Observable, of, from, throwError } from 'rxjs';
import { IResult } from './exercise34/Result';

@Injectable({
  providedIn: 'root',
})
export class GenderizeService {
  constructor(private _http: HttpClient) {}
  getGenderResult(checkName: string) {
    let _url: string = '/gender/';
    const queryParams = new HttpParams().set('name', checkName);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
      params: queryParams,
    };
    return this._http.get<any>(_url, requestOptions).pipe(
      map((res) => JSON.parse(res) as IResult),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
