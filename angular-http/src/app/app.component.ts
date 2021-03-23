import { Component, OnInit } from '@angular/core';
import { ProductModel, ProductsService } from './products.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public products: ProductModel[];

  constructor(private productsService: ProductsService) {
  }

  public ngOnInit(): void {
    this.productsService.getProductsList()
      .pipe(
        take(1)
      ).subscribe(
      products => this.products = products,
      error => console.log('error occurred ', error)
    );
  }
}
