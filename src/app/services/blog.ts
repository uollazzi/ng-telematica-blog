import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CategoriaModel } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private http: HttpClient = inject(HttpClient);

  // TODO: environments
  getCategories() {
    return this.http.get<CategoriaModel[]>("https://localhost:7000/api/Categorie");
  }
}
