import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogService } from '../../services/blog';
import { ArticoloModel } from '../../models/blog';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-blog-post-list',
  imports: [RouterModule],
  templateUrl: './blog-post-list.html',
  styleUrl: './blog-post-list.css',
})
export class BlogPostList implements OnInit {
  blogService: BlogService = inject(BlogService);
  posts = signal<ArticoloModel[]>([]);

  ngOnInit(): void {
    this.blogService.getArticoli()
      .subscribe(r => this.posts.set(r));
  }
}
