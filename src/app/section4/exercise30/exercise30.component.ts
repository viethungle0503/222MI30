import { Component } from '@angular/core';
import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-exercise30',
  templateUrl: './exercise30.component.html',
  styleUrls: ['./exercise30.component.css'],
})
export class Exercise30Component {
  data: any;
  errMessage: string = '';
  constructor(_service: FakeProductService) {
    _service.getFakeProductData().subscribe({
      next: (data: any) => {
        this.data = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
