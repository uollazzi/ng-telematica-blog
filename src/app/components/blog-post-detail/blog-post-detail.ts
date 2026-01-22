import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../../services/blog';
import { ArticoloModel } from '../../models/blog';
import { LoadingSpinner } from "../loading-spinner/loading-spinner";

@Component({
  selector: 'app-blog-post-detail',
  imports: [LoadingSpinner, RouterModule],
  templateUrl: './blog-post-detail.html',
  styleUrl: './blog-post-detail.css',
})
export class BlogPostDetail implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute); // servizio per interagire con la rotta corrente
  blogService = inject(BlogService);
  post = signal<ArticoloModel | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.blogService.getArticoloById(id!)
      .subscribe(r => this.post.set(r));
  }
}
