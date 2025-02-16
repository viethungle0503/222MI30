import { Component } from '@angular/core';

@Component({
  selector: 'app-json-object-model',
  templateUrl: './json-object-model.component.html',
  styleUrls: ['./json-object-model.component.css']
})
export class JsonObjectModelComponent {
  public product ={
    id:123,
    name:"Thuốc trị xàm",
    price:300,
    src:'assets/coca.jpg'
  }
}
