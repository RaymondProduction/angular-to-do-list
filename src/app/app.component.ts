import { Component } from '@angular/core';

interface ITask {
  title: string;
  complete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Raymond';
  tasks = [
    {title: 'хлеб',
    complete: false},
    {title: 'колбаса',
     complete: true},
    {title: 'кефир',
    complete: false},
  ];
  select(task: ITask) {
    task.complete = !task.complete;
  }
  remove(index: number) {
    this.tasks.splice(index, 1);
  }
  add(title: string) {
    this.tasks.push({
      title,
      complete: false
    })
  }
}
