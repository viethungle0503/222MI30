import { Component, ViewChild, ElementRef } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from './Fashion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise57',
  templateUrl: './exercise57.component.html',
  styleUrls: ['./exercise57.component.css'],
})
export class Exercise57Component {
  @ViewChild('closeModal') closeModal!: ElementRef;
  fashions: any;
  errMessage: string = '';
  notification: string = '';
  tempID: string = '';
  constructor(public _service: FashionAPIService, private router: Router) {
    this.onGetFashions();
    // this._service.getFashionByStyle("Kids Style").subscribe({
    //   next: (data : any) => {
    //     console.log(data)
    //   },
    //   error: (err) => {
    //     this.errMessage = err;
    //   },
    // });
  }
  onGetFashions() {
    this._service.getFashions().subscribe({
      next: (data: any) => {
        this.fashions = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
  onDeleteConfirm(id: string) {
    this.tempID = id;
  }
  onDelete() {
    this.closeModal.nativeElement.click();
    this._service.deleteFashion(this.tempID).subscribe({
      next: (data: any) => {
        this.notification = 'Delete successfully';
        this.onGetFashions();
        setTimeout(() => {
          this.notification = '';
        }, 2000);
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
  onUpdate(f: Fashion) {
    this.router.navigate(['exercise60', f._id]);
  }
  onDetail(f: Fashion) {
    this.router.navigate(['exercise58', f._id]);
  }
  onAdd() {
    this.router.navigate(['exercise59']);
  }
}
