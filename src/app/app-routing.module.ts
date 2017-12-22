import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'product',
        loadChildren: 'app/product/product.module#ProductModule'
    }
];
@NgModule({
  imports: [
          RouterModule.forRoot(routes)
  ],
  exports: [
          RouterModule
  ]
})
export class AppRoutingModule { }
