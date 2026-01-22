import { Component } from '@angular/core';
import { BlogCategoryList } from "../blog-category-list/blog-category-list";
import { BlogPostList } from "../blog-post-list/blog-post-list";

@Component({
  selector: 'app-blog',
  imports: [BlogCategoryList, BlogPostList],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
