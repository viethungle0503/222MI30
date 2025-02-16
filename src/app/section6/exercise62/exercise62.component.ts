import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { Router } from '@angular/router';
import { Fashion } from '../exercise57/Fashion';
@Component({
  selector: 'app-exercise62',
  templateUrl: './exercise62.component.html',
  styleUrls: ['./exercise62.component.css'],
})
export class Exercise62Component {
  allData: any;
  data: any;
  errMessage: string = '';
  constructor(public _service: FashionAPIService, private router: Router) {
    this.onGetAll();
  }
  onGetAll() {
    this._service.getFashionsGroupByStyle().subscribe({
      next: (data: any) => {
        this.allData = data;
        this.data = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
  onGetOneFashionGroupByStyle(style: string) {
    this._service.getOneFashionGroupByStyle(style).subscribe({
      next: (data: any) => {
        this.data = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
  onDetail(f: Fashion) {
    this.router.navigate(['exercise58', f._id]);
  }
}
