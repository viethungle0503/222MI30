import { Component } from '@angular/core';
import { PublicAPIService } from '../public-api.service';

@Component({
  selector: 'app-exercise33',
  templateUrl: './exercise33.component.html',
  styleUrls: ['./exercise33.component.css'],
})
export class Exercise33Component {
  entries: any;
  errMessage: string = '';
  constructor(_service: PublicAPIService) {
    _service.getAPIs().subscribe({
      next: (data: any) => {
        this.entries = data.entries;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
