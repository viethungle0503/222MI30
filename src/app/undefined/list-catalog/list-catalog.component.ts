import { Component } from '@angular/core';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent {
  database=[
    {cateId:"Cate1",cateName:"Máy tính", products:[
      {productId:1,productName:"Dell 113",productPrice:300},
      {productId:2,productName:"Vivo 113",productPrice:400},
      {productId:3,productName:"MSI 113",productPrice:500},
      {productId:4,productName:"Lazada 113",productPrice:600},
      {productId:5,productName:"Shopee 113",productPrice:700},
    ]},
    {cateId:"Cate2",cateName:"Điện thoại", products:[
      {productId:4,productName:"Dell 113",productPrice:300},
      {productId:5,productName:"Vivo 113",productPrice:400},
      {productId:6,productName:"MSI 113",productPrice:500},
      {productId:7,productName:"Lazada 113",productPrice:600},
      {productId:8,productName:"Shopee 113",productPrice:700},
    ]},
    {cateId:"Cate3",cateName:"Tai nghe", products:[
      {productId:9,productName:"Dell 113",productPrice:300},
      {productId:10,productName:"Vivo 113",productPrice:400},
      {productId:11,productName:"MSI 113",productPrice:500},
      {productId:12,productName:"Lazada 113",productPrice:600},
      {productId:13,productName:"Shopee 113",productPrice:700},
    ]},
  ]
}
