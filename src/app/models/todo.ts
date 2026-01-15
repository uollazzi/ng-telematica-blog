export interface GetTodosResponse {
    todos: Todo[],
    total: number,
    skip: number,
    limit: number
}

export interface Todo {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

//   {
//   "todos": [
//     {
//       "id": 1,
//       "todo": "Do something nice for someone I care about",
//       "completed": true,
//       "userId": 26
//     },
//     {...},
//     {...}
//     // 30 items
//   ],
//   "total": 150,
//   "skip": 0,
//   "limit": 30
// }