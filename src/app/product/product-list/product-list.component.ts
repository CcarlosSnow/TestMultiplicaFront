import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

    constructor() {
        // any
    }

    ngOnInit(): void {
        console.log('product');
        // any
    }

    ngOnDestroy(): void {
        // any
    }
}
