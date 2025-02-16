import { Component } from '@angular/core';
import { DongABankService } from '../dong-abank.service';
@Component({
  selector: 'app-exercise29',
  templateUrl: './exercise29.component.html',
  styleUrls: ['./exercise29.component.css'],
})
export class Exercise29Component {
  data: any;
  errMessage: string = '';
  constructor(_service: DongABankService) {
    _service.getDongABankData().subscribe({
      next: (data: any) => {
        this.data = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
