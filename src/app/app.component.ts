import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  task = '';
  taksList: { id: number; name: string }[] = [];

  addTask() {
    this.taksList.push({ id: this.taksList.length, name: this.task });
  }
  deleteTask(id: number) {
    this.taksList = this.taksList.filter((item) => item.id != id);
  }
}
