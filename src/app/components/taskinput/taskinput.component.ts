import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interface/task';


@Component({
  selector: 'app-taskinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './taskinput.component.html',
  styleUrl: './taskinput.component.css'
})
export class TaskinputComponent {
  tasks: Task[] = [];
  newTask: Task = <Task>{
    name:"",
  };
  @Output() outEvent = new EventEmitter<Task[]>();

  addTask() {
    if (this.newTask.name.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = <Task>{
        name: "",
      };
      this.sendTasks()
    }
  }
  sendTasks() {
    this.outEvent.emit(this.tasks);
  }

}
