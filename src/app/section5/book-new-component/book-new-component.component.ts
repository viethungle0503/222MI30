import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookAPIService } from '../book-api.service';
import { Book, OldBook } from '../interface/Book';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { finalize, Subscription } from 'rxjs';
import { Observable } from 'tinymce';

@Component({
  selector: 'app-book-new-component',
  templateUrl: './book-new-component.component.html',
  styleUrls: ['./book-new-component.component.css'],
})
export class BookNewComponentComponent {
  @ViewChild('demoImage') demoImage!: ElementRef;
  @Input()
  requiredFileType: any;
  file: any;
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  book = new Book();
  books: any;
  oldBook = new OldBook();
  oldBooks: any;
  errMessage: string = '';
  constructor(
    private _service: BookAPIService,
    private router: Router,
    private http: HttpClient
  ) {
    this._service.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this._service.getOldBooks().subscribe({
      next: (data) => {
        this.oldBooks = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  postBook() {
    if (this.book.id.replace(/\s/g, '').length === 0) {
      alert('Không được để trống ID');
      return;
    }
    let i = 0;
    this.books.forEach((b: Book) => {
      if (b.id == this.book.id) {
        i = 1;
      }
    });
    if (i == 1) {
      alert('Không được tạo trùng id');
      return;
    }
    if (this.book.image !== null) {
      this.book.image = this.book.image.replace(/.*[\/\\]/, '');
    }
    this._service.postBook(this.book).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.log(err);
        this.errMessage = err;
      },
    });
    this.router.navigate(['bookmanagement']);
  }
  postOldBook() {
    {
      this._service.postOldBook(this.oldBook).subscribe({
        next: (data) => {
          this.oldBooks = data;
        },
        error: (err) => {
          this.errMessage = err;
        },
      });
    }
  }
  defaultValue() {
    this.book.id = '10';
    this.book.name = 'Sách luyện công';
    this.book.price = '25000';
    this.book.description = 'Sách dạy cho những vị người cần công phu';
    // this.book.image = 'b3.jpg';
    this.book.updateDate = `${new Date()}`;
    this.book.quantity = '100';
    this.book.cdCode = '15';
    this.book.publisherCode = '30';
    this.book.idHolder = this.book.id;
  }
  clear() {
    this.book.id = '';
    this.book.name = '';
    this.book.price = '';
    this.book.description = '';
    // this.book.image = '';
    this.book.updateDate = '';
    this.book.quantity = '';
    this.book.cdCode = '';
    this.book.publisherCode = '';
    this.book.idHolder = this.book.id;
  }
  goBack() {
    this.router.navigate(['bookmanagement']);
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
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }
  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
}
