import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-json-array-model-product-http-service',
  templateUrl: './json-array-model-product-http-service.component.html',
  styleUrls: ['./json-array-model-product-http-service.component.css'],
})
export class JsonArrayModelProductHttpServiceComponent {
  products: any;
  constructor(private _service: ProductHttpService) {
    this._service.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
      },
    });
  }
}
