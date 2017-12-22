import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routing';

@NgModule({
    declarations: [
        ProductAddEditComponent,
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})

export class ProductModule {

}
