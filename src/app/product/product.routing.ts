import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductListComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forChild(productRoutes) ],
    exports: [ RouterModule ]
})

export class ProductRoutingModule { }
