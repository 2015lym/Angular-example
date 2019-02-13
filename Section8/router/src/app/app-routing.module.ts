import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: AComponent },
  { path: 'A', component: AComponent },
  { path: 'B', component: BComponent },
  {
    path: 'C',
    component: CComponent,
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'teacher/:name', component: TeacherComponent },
      { path: 'parent', component: ParentComponent, data: { name: '王五' } }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
