import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';

import { CustomerService } from './customer.service';
import { TortasComponent } from './tortas/tortas.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TortasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
