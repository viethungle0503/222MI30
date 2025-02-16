import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, retry, map } from 'rxjs/operators';
import { Observable, of, from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  private _url: string = './assets/data/customers.json';
  constructor(private _http: HttpClient) {}
  getCustomersHandleError() {
    return this._http
      .get<IGroupCustomer[]>(this._url)
      .pipe(retry(3), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
export interface IGroupCustomer {
  CustomerTypeId: string;
  CustomterTypeName: string;
  Customers: Array<ICustomer>;
  Image: string;
}
export interface ICustomer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}
