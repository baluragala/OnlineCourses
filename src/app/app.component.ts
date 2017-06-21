import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  topCourses = [
    {title: 'Angular'},
    {title: 'React'},
    {title: 'Vue'},
    {title: 'Elm'}
  ];
}
