import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Practice';

  //There are  datatype in ts
  id: number = 0;   //it can be hold number and float
  name: string = 'prince';
  istrue: boolean = false;
  list: number[] = [1, 2, 3];

}
