import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wysapp';

  AboutMe() {
    window.scrollTo({ top: 1000, behavior: 'smooth' })
  }
  TimeLine() {
    window.scrollTo({ top: 2000, behavior: 'smooth' })
  }
}
