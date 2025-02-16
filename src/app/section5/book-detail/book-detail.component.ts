import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent {
  book: any;
  oldBook: any;
  errMessage: string = '';
  constructor(
    private _service: BookAPIService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._service.getBook(id).subscribe({
          next: (data) => {
            this.book = data;
          },
          error: (err) => {
            console.log(err);
            this.errMessage = err;
          },
        });
      }
    });
  }
  goBack() {
    this.router.navigate(['bookmanagement']);
  }
  searchBook(bookId: string) {
    this._service.getOldBook(bookId).subscribe({
      next: (data) => {
        this.oldBook = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
