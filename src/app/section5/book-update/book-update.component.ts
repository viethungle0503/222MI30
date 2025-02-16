import { Component, ElementRef, ViewChild } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { Book, OldBook } from '../interface/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css'],
})
export class BookUpdateComponent {
  @ViewChild('demoImage') demoImage!: ElementRef;
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  file: any;
  book = new Book();
  oldBook = new OldBook();
  books: any;
  oldBooks: any;
  errMessage: string = '';
  constructor(
    private _service: BookAPIService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
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
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.demoImage.nativeElement.src = `http://localhost:3000/image/${this.book.image}`;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.onGetOldBooks();
  }
  onGetOldBooks() {
    this._service.getOldBooks().subscribe({
      next: (data) => {
        this.oldBooks = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putBook() {
    if (this.book.idHolder === null) {
      alert('Không được bỏ trống');
      return;
    }
    this.book.idHolder = this.book.idHolder.toString().replace(/\s/g, '');
    if (this.book.idHolder.length === 0) {
      alert('Không được bỏ trống');
      return;
    }
    let i = 0;
    this.books.forEach((b: Book) => {
      if (b.id == this.book.idHolder) {
        i = 1;
      }
    });
    if (i == 1) {
      alert('Không được tạo trùng id');
      return;
    }
    this._service.putBook(this.book).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.router.navigate(['bookmanagement']);
  }
  goBack() {
    this.router.navigate(['bookmanagement']);
  }
  putOldBook() {
    this._service.putOldBook(this.oldBook).subscribe({
      next: (data) => {
        console.log(data);
        this.onGetOldBooks();
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
      const formData = new FormData();
      formData.append('image', file);
      const upload$ = this.http
        .post('/upload', formData, {
          reportProgress: true,
          observe: 'events',
          responseType: 'text',
          // responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'
        })
        .pipe(
          finalize(() => {
            this.demoImage.nativeElement.src = new URL(
              'http://localhost:3000/image/' + file.name
            ).href;
            this.book.image = file.name;
            this.reset();
          })
        );

      this.uploadSub = upload$.subscribe((event) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        }
      });
    } else {
      console.log('No file selected!');
    }
  }
}
