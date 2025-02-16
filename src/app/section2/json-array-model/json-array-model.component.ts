import { Component } from '@angular/core';

@Component({
  selector: 'app-json-array-model',
  templateUrl: './json-array-model.component.html',
  styleUrls: ['./json-array-model.component.css']
})
export class JsonArrayModelComponent {
  public products =[
    {id:'p1',name:"Coca",price:100,src:'assets/coca.jpg'},
    {id:'p2',name:"Pepsi",price:300,src:'assets/pepsi.png'},
    {id:'p3',name:"Sting",price:200,src:'assets/sting.jpg'},
  ]
    
  
}
