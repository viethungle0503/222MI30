import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Module } from './section1/section1.module';

import { BindingPropertyComponent } from './section1/binding-property/binding-property.component';
import { BindingClassComponent } from './section1/binding-class/binding-class.component';
import { BindingTwoWayComponent } from './section1/binding-two-way/binding-two-way.component';
import { BindingStyleComponent } from './section1/binding-style/binding-style.component';
import { BindingEventComponent } from './section1/binding-event/binding-event.component';
import { QuadraticEquationComponent } from './section1/quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './section1/lunar-year/lunar-year.component';
import { JsonObjectModelComponent } from './section2/json-object-model/json-object-model.component';
import { JsonArrayModelComponent } from './section2/json-array-model/json-array-model.component';
import { JsonArrayModelWithEventComponent } from './section2/json-array-model-with-event/json-array-model-with-event.component';
import { JsonArrayModelWithEventDetailComponent } from './section2/json-array-model-with-event-detail/json-array-model-with-event-detail.component';
import { JsonArrayModelProductCatalogComponent } from './section2/json-array-model-product-catalog/json-array-model-product-catalog.component';
import { JsonArrayModelProductHttpServiceComponent } from './section2/json-array-model-product-http-service/json-array-model-product-http-service.component';
import { ServiceProductHttpHandleErrorComponent } from './section2/service-product-http-handle-error/service-product-http-handle-error.component';
import { JsonArrayModelGroupCustomersComponent } from './section2/json-array-model-group-customers/json-array-model-group-customers.component';
import { PageNotFoundComponent } from './section2/page-not-found/page-not-found.component';
import { JsonObjectModelCustomerServiceComponent } from './section2/json-object-model-customer-service/json-object-model-customer-service.component';
import { LoginSceenComponent } from './section3/login-sceen/login-sceen.component';
import { Exercise29Component } from './section4/exercise29/exercise29.component';
import { Exercise30Component } from './section4/exercise30/exercise30.component';
import { Exercise32Component } from './section4/exercise32/exercise32.component';
import { Exercise33Component } from './section4/exercise33/exercise33.component';
import { Exercise34Component } from './section4/exercise34/exercise34.component';
import { Exercise35Component } from './section4/exercise35/exercise35.component';
import { Exercise36Component } from './section4/exercise36/exercise36.component';
import { BookComponent } from './section5/book/book.component';
import { BookDetailComponent } from './section5/book-detail/book-detail.component';
import { BookNewComponentComponent } from './section5/book-new-component/book-new-component.component';
import { BookUpdateComponent } from './section5/book-update/book-update.component';
import { BookDeleteComponent } from './section5/book-delete/book-delete.component';
import { FileUploadComponent } from './section5/file-upload/file-upload.component';
import { BookManagementComponent } from './section5/book-management/book-management.component';
import { Exercise57Component } from './section6/exercise57/exercise57.component';
import { Exercise58Component } from './section6/exercise58/exercise58.component';
import { Exercise59Component } from './section6/exercise59/exercise59.component';
import { Exercise60Component } from './section6/exercise60/exercise60.component';
import { Exercise62Component } from './section6/exercise62/exercise62.component';
// Undefined
import { ProductComponent } from './undefined/product/product.component';
import { ListProductComponent } from './undefined/list-product/list-product.component';
import { ListProduct2Component } from './undefined/list-product2/list-product2.component';
import { ListCatalogComponent } from './undefined/list-catalog/list-catalog.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingTwoWayComponent,
    BindingStyleComponent,
    BindingEventComponent,
    QuadraticEquationComponent,
    LunarYearComponent,
    // RoutingComponent,
    JsonObjectModelComponent,
    JsonArrayModelComponent,
    JsonArrayModelWithEventComponent,
    JsonArrayModelWithEventDetailComponent,
    JsonArrayModelProductCatalogComponent,
    JsonArrayModelProductHttpServiceComponent,
    ServiceProductHttpHandleErrorComponent,
    JsonArrayModelGroupCustomersComponent,
    PageNotFoundComponent,
    JsonObjectModelCustomerServiceComponent,
    LoginSceenComponent,
    Exercise29Component,
    Exercise30Component,
    Exercise32Component,
    Exercise33Component,
    Exercise34Component,
    Exercise35Component,
    Exercise36Component,
    BookComponent,
    BookDetailComponent,
    BookNewComponentComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    FileUploadComponent,
    BookManagementComponent,
    Exercise57Component,
    Exercise58Component,
    Exercise59Component,
    Exercise60Component,
    Exercise62Component,
    // Undefined
    ProductComponent,
    ListProductComponent,
    ListProduct2Component,
    ListCatalogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    Section1Module,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
