import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogService } from '../../services/blog';
import { CategoriaModel } from '../../models/blog';

@Component({
  selector: 'app-blog-category-list',
  imports: [],
  templateUrl: './blog-category-list.html',
  styleUrl: './blog-category-list.css',
})
export class BlogCategoryList implements OnInit {
  blogService: BlogService = inject(BlogService);

  categorie = signal<CategoriaModel[]>([]);

  ngOnInit(): void {
    this.blogService.getCategories()
      .subscribe(r => this.categorie.set(r));
  }
}
