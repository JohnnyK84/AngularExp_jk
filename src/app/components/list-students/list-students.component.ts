import { Component, OnInit } from '@angular/core';
//import students service
import { StudentsService } from 'src/app/services/students.service';
//import students Class model
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  public students = [];
  selectedStudent: Student;
 
  //data from student service
  constructor(private _studentsService: StudentsService) { }

  //get student data as array of Students
  ngOnInit() {
    this.students = this._studentsService.getStudents();
  }

  //set selected student details when clicked from list
  selectStudent(student: Student) { 
    this.selectedStudent = student;
    //console.log(student)
  }

  //set seletcted student details when search is succesful
  searchedStudent($event) {
    this.selectedStudent = $event;
    //console.log('Searched Student'+$event)
  }
}
