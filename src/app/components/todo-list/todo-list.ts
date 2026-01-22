import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos';
import { GetTodosResponse, Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, LoadingSpinner],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  todosService: TodosService = inject(TodosService);

  // definizione di signal
  todoResponse = signal<GetTodosResponse | undefined>(undefined);

  // computed signals
  numeroTodoScaricati = computed(() => this.todoResponse()?.todos.length);
  numeroTodoTotali = computed(() => this.todoResponse()?.total);

  ngOnInit(): void {
    this.todosService.getTodos()
      .subscribe(r => {
        // scrittura del valore del signal
        this.todoResponse.set(r);
        console.log(this.todoResponse());
        console.log("Todos scaricati con successo");

      });
  }
}
