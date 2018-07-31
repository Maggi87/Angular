import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  public loop = ['Pune','Dhule','Kohlapur','Nashik','Jalna','Nagpur'];
  constructor() { }

  ngOnInit() {
  }

}
