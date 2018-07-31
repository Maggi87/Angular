import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  public str = '';
  constructor() { }

  ngOnInit() {
  }

  simpleEvent(){
    console.log("button Presse");
  }
  showData(){
    this.str = 'Hello Word !!';
  }

  showEvent(value){
    console.log(value);
  }
}
