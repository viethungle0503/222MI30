import { Component } from '@angular/core';
import { from } from 'rxjs';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../exercise57/Fashion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-exercise59',
  templateUrl: './exercise59.component.html',
  styleUrls: ['./exercise59.component.css'],
})
export class Exercise59Component {
  fashion = new Fashion();
  errMessage: string = '';
  notification: string = '';
  public demoImage: string | undefined = '';
  constructor(private _service: FashionAPIService, private router: Router) {}
  public setFashion(f: Fashion) {
    this.fashion = f;
  }
  onFileSelected(event: any, fashion: Fashion) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    // reader.onloadend =this._handleReaderLoaded.bind(this);
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.demoImage = btoa(binaryString);
    console.log(btoa(binaryString));
  }
  postFashion() {
    this.fashion.createdDate = new Date().toISOString();
    this._service.postFashion(this.fashion).subscribe({
      next: (data: any) => {
        this.fashion = data;
        this.notification =
          'Added successfully, please wait for 5s and you will be redirected to main page';
        // setTimeout(() => {
        //   this.router.navigate(['exercise57']);
        // }, 5000);
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
