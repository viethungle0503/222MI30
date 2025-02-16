import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-json-array-model-with-event',
  templateUrl: './json-array-model-with-event.component.html',
  styleUrls: ['./json-array-model-with-event.component.css'],
})
export class JsonArrayModelWithEventComponent {
  public products: any;
  constructor(pservice: ProductServiceService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }
  viewDetail(f: any) {
    this.router.navigate(['jsonarraymodelwitheventdetail', f.id]);
  }
}
