import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public MyEvent =new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessage()
  {
    this.MyEvent.emit("Hello parent how are you ?");

  }

}
