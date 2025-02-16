import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-json-array-model-group-customers',
  templateUrl: './json-array-model-group-customers.component.html',
  styleUrls: ['./json-array-model-group-customers.component.css'],
})
export class JsonArrayModelGroupCustomersComponent {
  customerGroups: any;
  errMessage: string = '';
  constructor(_service: CustomerServiceService) {
    _service.getCustomersHandleError().subscribe({
      next: (data: any) => {
        this.customerGroups = data;
      },
      error: (err: any) => {
        this.errMessage = err;
      },
    });
    console.log(this.customerGroups);
  }
}
