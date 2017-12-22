import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product.routing';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    declarations: [
        ProductAddEditComponent,
        ProductListComponent
    ],
    bootstrap: [ProductListComponent],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [ProductListComponent],
    providers: [
    ]
})

export class ProductModule {

}
