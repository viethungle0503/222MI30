import { Injectable } from '@angular/core';
import { IFakeProduct } from './exercise30/FakeProduct';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FakeProductService {
  constructor(private _http: HttpClient) {}
  private _url: string = '/products';
  getFakeProductData(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IFakeProduct>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
