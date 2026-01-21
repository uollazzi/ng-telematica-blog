import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductCategory } from '../models/product-category';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http: HttpClient = inject(HttpClient);

  getProductCategories() {
    return this.http.get<ProductCategory[]>("https://dummyjson.com/products/categories");
  }
}
