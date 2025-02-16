import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, finalize, retry, map } from 'rxjs/operators';
import { Observable, of, from, throwError } from 'rxjs';
import { IResult } from './exercise35/Result';
@Injectable({
  providedIn: 'root',
})
export class NationService {
  constructor(private _http: HttpClient) {}
  getNationPopulation() {
    let _url: string = '/api/data';
    let queryParams = new HttpParams()
      .set('drilldowns', 'Nation')
      .set('measures', 'Population');
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
      map((res) => {
        return JSON.parse(res) as IResult;
      }),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
