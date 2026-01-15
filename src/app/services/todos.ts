import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetTodosResponse } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // private http: HttpClient = inject(HttpClient);
  constructor(private http: HttpClient) {

  }

  getTodos(): Observable<GetTodosResponse> {
    return this.http.get<GetTodosResponse>("https://dummyjson.com/todos");
  }
}
