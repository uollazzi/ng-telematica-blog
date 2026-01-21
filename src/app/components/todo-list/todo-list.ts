import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos';
import { GetTodosResponse, Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  todosService: TodosService = inject(TodosService);
  todoResponse?: GetTodosResponse;

  ngOnInit(): void {
    this.todosService.getTodos()
      .subscribe(r => {
        this.todoResponse = r;

        console.log("Todos scaricati con successo");
        console.log(this.todoResponse.todos);
      });
  }
}
