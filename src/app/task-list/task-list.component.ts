import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './service/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
  }
  openTaskDetails(task: Task): void {
    const dialogRef = this.dialog.open(TaskItemComponent, {
      width: '400px',
      data: { task }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
