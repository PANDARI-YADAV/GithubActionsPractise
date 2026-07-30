import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student],
  templateUrl: './app.html'
})
export class App {

}