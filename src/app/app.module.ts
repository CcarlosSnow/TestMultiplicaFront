import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
  ],
  declarations: [
        AppComponent,
  ],
  bootstrap: [ AppComponent ],
  schemas : [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
