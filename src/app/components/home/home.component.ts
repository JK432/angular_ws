import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TaskinputComponent } from '../taskinput/taskinput.component';
import { Task } from '../../interface/task';
import { TasklistComponent } from '../tasklist/tasklist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,TaskinputComponent,TasklistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
taskslist:Task[]=[]

  getTasks($event: Task[]){
    this.taskslist = $event
    console.log(this.taskslist)
  }
}
