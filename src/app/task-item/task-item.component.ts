import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Task } from '../task-list/service/task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  constructor(
    public dialogRef: MatDialogRef<TaskItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {}

  close(): void {
    this.dialogRef.close();
  }

}
