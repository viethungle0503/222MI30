import { Component } from '@angular/core';
import { NationService } from '../nation.service';
@Component({
  selector: 'app-exercise35',
  templateUrl: './exercise35.component.html',
  styleUrls: ['./exercise35.component.css'],
})
export class Exercise35Component {
  nations: any;
  errMessage: string = '';
  constructor(_service: NationService) {
    _service.getNationPopulation().subscribe({
      next: (response: any) => {
        this.nations = response.data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
  }
}
