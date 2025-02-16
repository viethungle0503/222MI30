import { Component } from '@angular/core';

@Component({
  selector: 'app-json-object-model-customer-service',
  templateUrl: './json-object-model-customer-service.component.html',
  styleUrls: ['./json-object-model-customer-service.component.css']
})
export class JsonObjectModelCustomerServiceComponent {
  public customer={
    "Id":"Cus123", 
    "Name":"Obama", 
    "Email":"obama@gmail.com", 
    "Age":67, 
    "Image":"assets/avatars/obama.jpg"
    } 
}
