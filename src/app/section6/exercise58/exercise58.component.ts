import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-exercise58',
  templateUrl: './exercise58.component.html',
  styleUrls: ['./exercise58.component.css'],
})
export class Exercise58Component {
  fashion: any;
  errMessage: string = '';
  constructor(
    private _service: FashionAPIService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.onSearch(id);
      }
    });
  }
  onSearch(fashionID: any) {
    this._service.getFashionById(fashionID).subscribe({
      next: (data: any) => {
        this.fashion = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
  onReturn() {
    this.router.navigate(['exercise57']);
  }
}
