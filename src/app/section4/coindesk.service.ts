import { Injectable } from '@angular/core';
import ICoin from './exercise32/Coin';
import { JsonPipe } from '@angular/common';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoindeskService {
  constructor(private _http: HttpClient) {}
  private _url: string = '/v1/bpi/currentprice.json';
  getCoindesk() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as ICoin),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
