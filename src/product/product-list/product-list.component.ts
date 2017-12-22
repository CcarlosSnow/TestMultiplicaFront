import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent implements OnInit, OnDestroy {

    constructor(
        private router: Router,
    ) {}

    ngOnInit(): void {
        console.log('product');
        // any
    }

    addProduct() {
        this.router.navigate(['/product/add']);
    }

    editProduct(productId) {
        this.router.navigate([`/product/${productId}/edit`]);
    }

    ngOnDestroy(): void {
        // any
    }
}
