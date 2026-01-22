import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { Blog } from './components/blog/blog';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: "todos",
        component: TodoList
    },
    {
        path: "blog",
        component: Blog
    },
    {
        path: "",
        component: Home
    }
];
