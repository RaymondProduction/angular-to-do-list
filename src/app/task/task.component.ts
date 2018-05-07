import { Component, Input } from '@angular/core';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent {
    @Input() task;
    @Input() index;
    @Input() tasks;

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log(this.task);
    }
    select() {
        this.task.complete = !this.task.complete;
    }
    remove(index: number) {
        this.tasks.splice(this.index, 1);
    }
    add(title: string) {
        this.tasks.push({
            title,
            complete: false
        });
    }
}
