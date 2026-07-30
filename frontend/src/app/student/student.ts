import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

}