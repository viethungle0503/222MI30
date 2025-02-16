import { Component } from '@angular/core';
import { from } from 'rxjs';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../exercise57/Fashion';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise60',
  templateUrl: './exercise60.component.html',
  styleUrls: ['./exercise60.component.css'],
})
export class Exercise60Component {
  fashion = new Fashion();
  errMessage: string = '';
  notification: string = '';
  constructor(
    private _service: FashionAPIService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this._service.getFashionById(id).subscribe({
          next: (data: any) => {
            this.fashion = data;
          },
          error: (err) => {
            this.errMessage = err;
          },
        });
      }
    });
  }
  onFileSelected(event: any, fashion: Fashion) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  onReturn() {
    this.router.navigate(['exercise57']);
  }
  onUpdate(f: Fashion) {
    f.updatedDate = new Date().toISOString();
    this._service.putFashion(f).subscribe({
      next: (data: any) => {
        this.fashion = data;
        this.notification =
          'Updated successfully, please wait for 5s and you will be redirected to main page';
        setTimeout(() => {
          this.router.navigate(['exercise57']);
        }, 5000);
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
