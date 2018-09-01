import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public name = "Hello Pune";
  public today = new Date();
  no = 32.389;

  public Institute = 
  {
    "Name":"Dattaprasad",
    "Location":"Pune"
  }

  constructor() { }

  ngOnInit() {
  }

}
