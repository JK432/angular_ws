import { Component, Input, OnChanges } from '@angular/core';
import { Task } from '../../interface/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnChanges {
  @Input() tasks: Task[] = [];

  ngOnChanges(): void {
    console.log('List changed:', this.tasks);
  }
  deletetask(index:number){
    this.tasks.splice(index, 1);
  }
}
