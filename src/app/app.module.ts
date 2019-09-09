import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import the service
import { StudentsService } from 'src/app/services/students.service';

import { AppComponent } from './app.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStudentComponent,
    ListStudentsComponent,
    StudentInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
