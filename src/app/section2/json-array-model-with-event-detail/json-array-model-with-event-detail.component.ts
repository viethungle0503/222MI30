import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-json-array-model-with-event-detail',
  templateUrl: './json-array-model-with-event-detail.component.html',
  styleUrls: ['./json-array-model-with-event-detail.component.css'],
})
export class JsonArrayModelWithEventDetailComponent {
  selectedProduct: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductServiceService,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = _fs.getProductDetail(id);
      }
    });
  }
  goBack() {
    this.router.navigate(['jsonarraymodelwithevent']);
  }
}
