import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property',
  // templateUrl: './binding-property.component.html',  
  template:`
  <p [innerHTML]="name"></p>
  <p [innerText]="nameid"></p>
  <input [readOnly]="isDisabled" type="text" value="{{email}}">
  <p>{{emailid}}</p>
  `,
  styleUrls: ['./binding-property.component.css'],
})
export class BindingPropertyComponent {
  public name: string = '<h1>Trần Duy Thanh<h1/>';
  public email: string = 'thanhtd@uel.edu.vn';
  public nameid: string = '123';
  public emailid: string = '456';
  public isDisabled: boolean = true;
}
