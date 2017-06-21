import {Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'zeo-course-preview',
  templateUrl: './course-preview.component.html',
  styleUrls: ['./course-preview.component.css']
})
export class CoursePreviewComponent implements OnInit {

  @Input() course;
  backgroundColor: string;

  constructor() {

  }

  ngOnInit() {
  }

}
