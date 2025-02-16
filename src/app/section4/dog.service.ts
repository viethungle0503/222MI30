import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, finalize, retry, map } from 'rxjs/operators';
import { Observable, of, from, throwError } from 'rxjs';
import { IDog } from './exercise36/Dog';
@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private _http: HttpClient) {}
  getRandomDog() {
    let _url: string = '/api/breeds/image/random';
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>(_url, requestOptions).pipe(
      map((res) => JSON.parse(res) as IDog),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
