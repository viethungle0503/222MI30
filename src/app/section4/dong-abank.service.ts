import { Injectable } from '@angular/core';
import { IDongABankData } from './exercise29/DongABankData';
import { IDongABankItem } from './exercise29/DongABankItem';
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
export class DongABankService {
  constructor(private _http: HttpClient) {}
  private _url: string = '/exchange/export';

  getDongABankData() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>(this._url, requestOptions).pipe(
      map((res) => JSON.parse(res.slice(1, -1)) as IDongABankData),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
