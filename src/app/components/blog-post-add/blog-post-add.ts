import { Component, inject, OnInit, signal } from '@angular/core';
import { ArticoloDTO, CategoriaModel } from '../../models/blog';
import { BlogService } from '../../services/blog';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post-add',
  imports: [FormsModule, RouterModule],
  templateUrl: './blog-post-add.html',
  styleUrl: './blog-post-add.css',
})
export class BlogPostAdd implements OnInit {
  // 2 tipi di sviluppo di form:
  // - template-driven forms (noi guardiamo questo)
  // - reactive forms
  model: ArticoloDTO = new ArticoloDTO();
  categorie = signal<CategoriaModel[]>([]);
  blogService = inject(BlogService);
  router = inject(Router);

  ngOnInit(): void {
    this.blogService.getCategories()
      .subscribe(r => this.categorie.set(r));
  }

  insertArticolo() {
    this.blogService.insertArticolo(this.model)
      .subscribe(r => {
        console.log(r);
        this.router.navigate(["/blog"]);
      });
  }
}
