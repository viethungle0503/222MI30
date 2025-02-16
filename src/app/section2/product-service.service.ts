import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productsImage=[
    {id:'p1',name:"Coca",price:100,src:'assets/coca.jpg'},
    {id:'p2',name:"Pepsi",price:300,src:'assets/pepsi.png'},
    {id:'p3',name:"Sting",price:200,src:'assets/sting.jpg'},
    ] 
    constructor() { }
    getProductsWithImages()
    { 
    return this.productsImage 
    } 
    getProductDetail(id:any){
    return this.productsImage.find(x=>x.id==id) 
    }
}
