import { Component, OnInit , Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  
  connstructor(): void { }

  ngOnInit(): void {
    
  }
  onClick(todo : Todo) {
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggered")
  }
    


}
