import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private router: Router
  ) {

  }

  btnHome(): void {
    this.router.navigateByUrl('home');
  }

  btnProduct(): void {
    this.router.navigateByUrl('product');
  }

  ngOnInit(): void {
    // any
  }
}
