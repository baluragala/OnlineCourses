import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursePreviewComponent} from './course-preview/course-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursePreviewComponent],
  exports: [CoursePreviewComponent]
})
export class CoursesModule {
}
