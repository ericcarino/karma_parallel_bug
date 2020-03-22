import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karma-parallel-bug';

  private foo() {
    const bar = 'test';
    console.log(bar);
  }
}
