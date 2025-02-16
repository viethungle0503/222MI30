import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyComponentComponent } from './section1/my-component/my-component.component';
import { BindingClassComponent } from './section1/binding-class/binding-class.component';
import { BindingEventComponent } from './section1/binding-event/binding-event.component';
import { BindingPropertyComponent } from './section1/binding-property/binding-property.component';
import { BindingStyleComponent } from './section1/binding-style/binding-style.component';
import { BindingTwoWayComponent } from './section1/binding-two-way/binding-two-way.component';
import { LunarYearComponent } from './section1/lunar-year/lunar-year.component';
import { QuadraticEquationComponent } from './section1/quadratic-equation/quadratic-equation.component';
import { JsonObjectModelComponent } from './section2/json-object-model/json-object-model.component';
import { JsonArrayModelComponent } from './section2/json-array-model/json-array-model.component';
import { JsonArrayModelWithEventComponent } from './section2/json-array-model-with-event/json-array-model-with-event.component';
import { JsonArrayModelWithEventDetailComponent } from './section2/json-array-model-with-event-detail/json-array-model-with-event-detail.component';
import { JsonArrayModelProductCatalogComponent } from './section2/json-array-model-product-catalog/json-array-model-product-catalog.component';
import { JsonArrayModelProductHttpServiceComponent } from './section2/json-array-model-product-http-service/json-array-model-product-http-service.component';
import { ServiceProductHttpHandleErrorComponent } from './section2/service-product-http-handle-error/service-product-http-handle-error.component';
import { JsonArrayModelGroupCustomersComponent } from './section2/json-array-model-group-customers/json-array-model-group-customers.component';
import { JsonObjectModelCustomerServiceComponent } from './section2/json-object-model-customer-service/json-object-model-customer-service.component';
import { LoginSceenComponent } from './section3/login-sceen/login-sceen.component';
import { Exercise29Component } from './section4/exercise29/exercise29.component';
import { Exercise30Component } from './section4/exercise30/exercise30.component';
import { Exercise32Component } from './section4/exercise32/exercise32.component';
import { Exercise33Component } from './section4/exercise33/exercise33.component';
import { Exercise34Component } from './section4/exercise34/exercise34.component';
import { Exercise35Component } from './section4/exercise35/exercise35.component';
import { Exercise36Component } from './section4/exercise36/exercise36.component';
import { BookNewComponentComponent } from './section5/book-new-component/book-new-component.component';
import { BookUpdateComponent } from './section5/book-update/book-update.component';
import { BookManagementComponent } from './section5/book-management/book-management.component';
import { BookDetailComponent } from './section5/book-detail/book-detail.component';
import { Exercise57Component } from './section6/exercise57/exercise57.component';
import { Exercise59Component } from './section6/exercise59/exercise59.component';
import { PageNotFoundComponent } from './section2/page-not-found/page-not-found.component';
import { Exercise58Component } from './section6/exercise58/exercise58.component';
import { Exercise60Component } from './section6/exercise60/exercise60.component';
import { Exercise62Component } from './section6/exercise62/exercise62.component';
import { BookComponent } from './section5/book/book.component';
import { BookDeleteComponent } from './section5/book-delete/book-delete.component';
// Undefined
import { ProductComponent } from './undefined/product/product.component';
import { ListProductComponent } from './undefined/list-product/list-product.component';
import { ListProduct2Component } from './undefined/list-product2/list-product2.component';
import { ListCatalogComponent } from './undefined/list-catalog/list-catalog.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Module 1
  { path: '1', redirectTo: 'section1', pathMatch: 'full' },
  {
    path: 'section1',
    loadChildren: () =>
      import('./section1/section1.module').then((m) => m.Section1Module),
  },
  { path: 'bindingproperty', component: BindingPropertyComponent },
  { path: 'bindingclass', component: BindingClassComponent },
  { path: 'bindingstyle', component: BindingStyleComponent },
  { path: 'bindingevent', component: BindingEventComponent },
  { path: 'bindingtwoway', component: BindingTwoWayComponent },
  { path: 'quadraticequation', component: QuadraticEquationComponent },
  { path: 'lunaryear', component: LunarYearComponent },
  // Module 2
  { path: 'jsonobjectmodel', component: JsonObjectModelComponent },
  { path: 'jsonarraymodel', component: JsonArrayModelComponent },
  {
    path: 'jsonarraymodelwithevent',
    component: JsonArrayModelWithEventComponent,
  },
  {
    path: 'jsonarraymodelwitheventdetail/:id',
    component: JsonArrayModelWithEventDetailComponent,
  },
  {
    path: 'jsonarraymodelproductcatalog',
    component: JsonArrayModelProductCatalogComponent,
  },
  {
    path: 'jsonarraymodelproducthttpservice',
    component: JsonArrayModelProductHttpServiceComponent,
  },
  {
    path: 'serviceproducthttphandleerror',
    component: ServiceProductHttpHandleErrorComponent,
  },
  {
    path: 'jsonarraymodelgroupcustomers',
    component: JsonArrayModelGroupCustomersComponent,
  },
  {
    path: 'jsonobjectmodelcustomerservice',
    component: JsonObjectModelCustomerServiceComponent,
  },
  // Module 3
  { path: 'loginscreen', component: LoginSceenComponent },
  // Module 4
  { path: 'exercise29', component: Exercise29Component },
  { path: 'exercise30', component: Exercise30Component },
  { path: 'exercise32', component: Exercise32Component },
  { path: 'exercise33', component: Exercise33Component },
  { path: 'exercise34', component: Exercise34Component },
  { path: 'exercise35', component: Exercise35Component },
  { path: 'exercise36', component: Exercise36Component },
  // Module 5
  { path: 'book', component: BookComponent },
  { path: 'bookmanagement', component: BookManagementComponent },
  { path: 'booknew', component: BookNewComponentComponent },
  { path: 'bookupdate', component: BookUpdateComponent },
  { path: 'bookupdate/:id', component: BookUpdateComponent },
  { path: 'bookdetail', component: BookDetailComponent },
  { path: 'bookdetail/:id', component: BookDetailComponent },
  { path: 'bookdelete', component: BookDeleteComponent },
  // Module 6
  { path: 'exercise57', component: Exercise57Component },
  { path: 'exercise58', component: Exercise58Component },
  { path: 'exercise58/:id', component: Exercise58Component },
  { path: 'exercise59', component: Exercise59Component },
  { path: 'exercise60/:id', component: Exercise60Component },
  { path: 'exercise62', component: Exercise62Component },
  // Module 7
  { path: 'exercise65', component: LoginComponent },
  // Undefined
  { path: 'product', component: ProductComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'list-product2', component: ListProduct2Component },
  { path: 'list-catalog', component: ListCatalogComponent },
  { path: '', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponent = [
  BindingClassComponent,
  BindingEventComponent,
  BindingPropertyComponent,
  BindingStyleComponent,
  BindingTwoWayComponent,
  LunarYearComponent,
  QuadraticEquationComponent,
  JsonObjectModelComponent,
  JsonArrayModelComponent,
  JsonArrayModelWithEventComponent,
  JsonArrayModelProductCatalogComponent,
  JsonArrayModelProductHttpServiceComponent,
  ServiceProductHttpHandleErrorComponent,
  JsonArrayModelGroupCustomersComponent,
  JsonObjectModelCustomerServiceComponent,
  PageNotFoundComponent,
  LoginSceenComponent,
  ProductComponent,
  ListProductComponent,
  ListProduct2Component,
  ListCatalogComponent,
];
