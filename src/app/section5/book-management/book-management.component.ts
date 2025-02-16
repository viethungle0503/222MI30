import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css'],
})
export class BookManagementComponent {
  books: any;
  errMessage: string = '';
  constructor(private _service: BookAPIService, private router: Router) {
    this.onGetBooks();
  }
  onGetBooks() {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  title = 'Quản lý thông tin sách';
  convertStringToDate(date: string) {
    return new Date(date);
  }
  onCreate() {
    this.router.navigate(['booknew']);
  }
  onDetail(book: any) {
    this.router.navigate(['bookdetail', book.id]);
  }
  onEdit(book: any) {
    this.router.navigate(['bookupdate', book.id]);
  }
  onDelete(book: any) {
    if (confirm('Bạn có chắc chắn muốn xóa dữ liệu này không') == false) {
      return;
    }
    this._service.deleteBook(book.id).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.onGetBooks();
  }
}
