import { Component } from '@angular/core';
import { CoindeskService } from '../coindesk.service';
import ICoin from './Coin';
@Component({
  selector: 'app-exercise32',
  templateUrl: './exercise32.component.html',
  styleUrls: ['./exercise32.component.css'],
})
export class Exercise32Component {
  coin: any;
  errMessage: string = '';
  constructor(_service: CoindeskService) {
    _service.getCoindesk().subscribe({
      next: (data: any) => {
        this.coin = data;
        this.coin.bpi = Object.values(this.coin.bpi);
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
