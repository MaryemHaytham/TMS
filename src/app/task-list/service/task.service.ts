import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  showDetails?: boolean; 
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private mockTasksUrl = 'api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    const tasks: Task[] = [
      { id: 1, title: 'Learn Angular', completed: false },
      { id: 2, title: 'Develop an App', completed: true },
      { id: 3, title: 'Test the Application', completed: false },
      { id: 4, title: 'Learn NGRX', completed: false },
      { id: 5, title: 'Intro to RXJS', completed: true },
      { id: 6, title: 'Intro to Tailwind', completed: false },
      { id: 7, title: 'Learn React', completed: false },
      { id: 8, title: 'Develop an React App', completed: true },
      { id: 9, title: 'Intro to security', completed: false }
    ];

    return of(tasks);
  }

}
