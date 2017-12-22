import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
        BrowserModule,
        ProductModule,
        AppRoutingModule,
  ],
  declarations: [
        AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  schemas : [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
