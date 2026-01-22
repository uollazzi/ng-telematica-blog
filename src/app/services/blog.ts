import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ArticoloModel, CategoriaModel } from '../models/blog';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private http: HttpClient = inject(HttpClient);

  getCategories() {
    return this.http.get<CategoriaModel[]>(environment.NET_API_BASE_URL + "/Categorie");
  }

  getArticoli() {
    return this.http.get<ArticoloModel[]>(environment.NET_API_BASE_URL + "/Articoli");
  }

  getArticoloById(id: string) {
    return this.http.get<ArticoloModel>(environment.NET_API_BASE_URL + "/Articoli/" + id);
  }
}
