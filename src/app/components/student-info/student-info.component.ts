import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  //get Input from parent component
  @Input() student: Student;

  constructor() { }
  
  ngOnInit() {
  }
  //set conditinal class dependent on grades to change font color
  setClass() {
    let aveGr = this.student.averageGrade;

    if (aveGr == 'A') {
      let classes = {
          gradeA: true
        }
        return classes; 
      } else if (aveGr == 'B') {
      let classes = {
        gradeB: true
      }
      return classes;
      } else if (aveGr == 'C') {
      let classes = {
        gradeC: true
      }
      return classes;
      } else if (aveGr == 'D') {
      let classes = {
        gradeD: true
      }
      return classes;
    }
  }
   
}


