import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts() {
    let products=[
      {id:100,name:"Bướm",price:500,image:"assets/h1.jpg"},
      {id:101,name:"Chuồn chuồn",price:600,image:"assets/h2.jpg"},
      {id:102,name:"Chuồn chuồn đỏ",price:700,image:"assets/h3.jpg"},
      {id:103,name:"Chuồn chuồn xanh",price:800,image:"assets/h4.jpg"},
      {id:104,name:"Bọ hung",price:900,image:"assets/h5.jpg"},
      {id:105,name:"Bướm độc",price:1000,image:"assets/h6.jpg"},
      {id:106,name:"Bọ xít",price:1100,image:"assets/h7.jpg"},
      {id:107,name:"Chuồn chuồn lửa",price:1200,image:"assets/h8.jpg"},
      {id:108,name:"Bướm hồng",price:1300,image:"assets/h9.jpg"},
      {id:109,name:"Siêu bọ hung",price:1400,image:"assets/h10.jpg"},
    ];
    return products;
  }
}
