import { Component } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-exercise36',
  templateUrl: './exercise36.component.html',
  styleUrls: ['./exercise36.component.css'],
})
export class Exercise36Component {
  dog: any;
  errMessage: string = '';
  constructor(private _service: DogService) {
    _service.getRandomDog().subscribe({
      next: (response: any) => {
        this.dog = response;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
  onChange() {
    this._service.getRandomDog().subscribe({
      next: (response) => {
        this.dog = response;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
