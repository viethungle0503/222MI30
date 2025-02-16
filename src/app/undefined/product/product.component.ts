import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product= {"id":123, 
            "name":"Thuoc bo than", 
            "price":300,
          "image":"assets/GVN_Insect_ (2).jpg" }

}
