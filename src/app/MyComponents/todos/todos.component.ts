import { Component, OnInit } from '@angular/core';  
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[];

  constructor() { 
    this.localItem = localStorage.getItem("todos") ?? '';
    try {
      this.todos = JSON.parse(this.localItem) || []; // Use default empty array if parsing fails or localItem is empty
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      this.todos = [];
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo); 
    this.todos.push(todo); 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) { 
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo);
  }
}
