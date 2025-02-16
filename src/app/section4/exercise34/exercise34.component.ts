import { Component } from '@angular/core';
import { GenderizeService } from '../genderize.service';

@Component({
  selector: 'app-exercise34',
  templateUrl: './exercise34.component.html',
  styleUrls: ['./exercise34.component.css'],
})
export class Exercise34Component {
  public result: any;
  public errMessage: string = '';
  constructor(private _service: GenderizeService) {}
  onCheck(checkName: string) {
    this._service.getGenderResult(checkName).subscribe({
      next: (data: any) => {
        this.result = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
