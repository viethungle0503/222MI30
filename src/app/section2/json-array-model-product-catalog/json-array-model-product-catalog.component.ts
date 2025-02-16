import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-json-array-model-product-catalog',
  templateUrl: './json-array-model-product-catalog.component.html',
  styleUrls: ['./json-array-model-product-catalog.component.css'],
})
export class JsonArrayModelProductCatalogComponent {
  products: any;
  constructor(private pservice: CatalogService) {
    this.products = pservice.getCategories();
  }
}
