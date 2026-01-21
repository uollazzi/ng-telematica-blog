import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./components/todo-list/todo-list";
import { ProductCategoryList } from "./components/product-category-list/product-category-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, ProductCategoryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-telematica-blog');
}
