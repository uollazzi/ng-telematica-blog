import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { Blog } from './components/blog/blog';
import { Home } from './components/home/home';
import { BlogPostDetail } from './components/blog-post-detail/blog-post-detail';
import { BlogPostAdd } from './components/blog-post-add/blog-post-add';

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
        path: "blog/articolo/nuovo",
        component: BlogPostAdd
    },
    {
        path: "blog/articolo/:id",
        component: BlogPostDetail,
    },
    {
        path: "",
        component: Home
    }
];
