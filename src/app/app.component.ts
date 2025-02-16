import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {
  
  }
  public title:string= "Good game";
  openBinding() {
    this.router.navigate(['1'])
    setTimeout(() => {
      this.router.navigate([`${this.router.url}/binding`])
    }, 100);
    
  }
  openBindingClass() {
    this.router.navigate(['bindingclass'])
  }
  openBindingEvent() {
    this.router.navigate(['bindingevent'])
  }
  openBindingProperty() {
    this.router.navigate(['bindingproperty'])
  }
  openBindingStyle() {
    this.router.navigate(['bindingstyle'])
  }
  openBindingTwoWay() {
    this.router.navigate(['bindingtwoway'])
  }
  openLunarYear() {
    this.router.navigate(['lunaryear'])
  }
  openQuadraticEquation() {
    this.router.navigate(['quadraticequation'])
  }
  openJsonObjectModel(){
    this.router.navigate(['jsonobjectmodel'])
  }
  openJsonArrayModel(){
    this.router.navigate(['jsonarraymodel'])
  }
  openJsonArrayModelWithEventComponent(){
    this.router.navigate(['jsonarraymodelwithevent'])
  }
  openJsonArrayModelProductCatalogComponent(){
    this.router.navigate(['jsonarraymodelproductcatalog'])
  }
  openJsonArrayModelProductHttpServiceComponent(){
    this.router.navigate(['jsonarraymodelproducthttpservice'])
  }
  openServiceProductHttpHandleErrorComponent(){
    this.router.navigate(['serviceproducthttphandleerror'])
  }
  openJsonObjectModelCustomerServiceComponent(){
    this.router.navigate(['jsonobjectmodelcustomerservice'])
  }
  openJsonArrayModelGroupCustomersComponent(){
    this.router.navigate(['jsonarraymodelgroupcustomers'])
  }
  openLoginSceenComponent(){
    this.router.navigate(['loginscreen'])
  }
  openListProduct():void {
    this.router.navigate(['list-product'])
  }
}
