import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogCategoryList } from "./components/blog-category-list/blog-category-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogCategoryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-telematica-blog');
}
