import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1,2,3,4,5,6,7];
  evenNumber = [2,4,6,8];
  oddNumber = [1,3,5,7];
  onlyOdd = false;
  value = 1000;
}
