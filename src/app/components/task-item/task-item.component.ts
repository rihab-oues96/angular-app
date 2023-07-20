import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task = { text: '', day: '', reminder: false };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() ontoggleReminder: EventEmitter<Task> = new EventEmitter(); // custom event

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.ontoggleReminder.emit(task);
  }
}
