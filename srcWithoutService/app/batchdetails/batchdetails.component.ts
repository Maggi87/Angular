import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit {

  public batch = [
    {"Name":"Dattaprasad", "Department":"MCA", "Div":"B"},
    {"Name":"Ramprasad", "Department":"BCA", "Div":"A"},
    {"Name":"Sagar", "Department":"MBA", "Div":"A"},
    {"Name":"Vipul", "Department":"BBA", "Div":"B"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
