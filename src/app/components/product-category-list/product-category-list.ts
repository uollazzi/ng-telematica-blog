import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products';
import { ProductCategory } from '../../models/product-category';

@Component({
  selector: 'app-product-category-list',
  imports: [],
  templateUrl: './product-category-list.html',
  styleUrl: './product-category-list.css',
})
export class ProductCategoryList implements OnInit {
  productsService: ProductsService = inject(ProductsService);
  categories = signal<ProductCategory[]>([]);

  ngOnInit(): void {
    this.productsService.getProductCategories()
      .subscribe(r => this.categories.set(r));
  }
}
