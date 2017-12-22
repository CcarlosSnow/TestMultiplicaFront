import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-product-add-edit',
    templateUrl: './product-add-edit.component.html',
    styleUrls: ['./product-add-edit.component.css'],
})

export class ProductAddEditComponent implements OnInit, OnDestroy {
    productId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.route.params.subscribe(params => {
            const productId = params.productId;
            if (productId) {
                this.productId = productId;
            }
        });
    }

    ngOnInit(): void {
        if (this.productId) {
            console.log(`edit product id ${this.productId}`);
        } else {
            console.log('add');
        }
        // any
    }

    goToProductList() {
        this.router.navigate(['/product']);
    }

    ngOnDestroy(): void {
        // any
    }
}
