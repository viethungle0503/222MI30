import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, retry, map } from 'rxjs/operators';
import { Observable, of, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  private _url: string = './assets/data/products.json';
  private _urlHandleError: string ='./assets/data/products123456.json';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._url);
  }
  getProductsHandleError() {
    return this._http
      .get<IProduct[]>(this._urlHandleError)
      .pipe(retry(3), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}

export interface IProduct {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
}
