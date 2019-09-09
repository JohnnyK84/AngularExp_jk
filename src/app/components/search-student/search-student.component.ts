import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {
  public students: Student[]; 
  public student: Student;

  constructor(private _studentsService: StudentsService) { }
  
   ngOnInit() {
    //copy Array of students to search from
    this.students = this._studentsService.getStudents();
  }

  //method to capture name entry and search array for match
  onKey(event: any) { // without type info
    let name = event.target.value;
    //console.log(name)
    for (let i = 0; i <= this.students.length; i++)
      if ( name == this.students[i].fname) {
        alert('Found Name: '+this.students[i].fname+" "+this.students[i].lname)
        this.student = this.students[i];
        this.outputStudent();
      }
  }

   //output Decorator to emit Student details
   @Output() studentEm = new EventEmitter<Student>();

   //event method output
   outputStudent() {
    this.studentEm.emit(this.student);
    //console.log('OUTPUT: '+this.student)
   }

}
