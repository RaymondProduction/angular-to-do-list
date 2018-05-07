import { Component } from '@angular/core';

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
  select(task) {
    task.complete = !task.complete;
  }
}
