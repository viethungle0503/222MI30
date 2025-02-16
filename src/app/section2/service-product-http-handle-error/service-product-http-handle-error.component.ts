import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-product-http-handle-error',
  templateUrl: './service-product-http-handle-error.component.html',
  styleUrls: ['./service-product-http-handle-error.component.css'],
})
export class ServiceProductHttpHandleErrorComponent {
  products: any;
  errMessage: string = '';
  constructor(_service: ProductHttpService, private router: Router) {
    _service.getProductsHandleError().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err;
        this.router.navigate(['*']);
      },
    });
  }
}
