import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  //method to return hard coded student information
  getStudents () {
    return [
      { sid: 1, fname: 'Jimmy', lname: 'Jones', age: 30, averageGrade: 'A' },
      { sid: 2, fname: 'Ashton', lname: 'Black', age: 30, averageGrade: 'B' },
      { sid: 3, fname: 'Liam', lname: 'White', age: 30, averageGrade: 'C' },
      { sid: 4, fname: 'Cinderella', lname: 'Story', age: 30, averageGrade: 'A' },
      { sid: 5, fname: 'Madonna', lname: 'Carr', age: 30, averageGrade: 'D' },
    ]
  }
}
