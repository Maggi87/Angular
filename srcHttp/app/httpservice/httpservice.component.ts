import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css']
})
export class HttpserviceComponent implements OnInit {

  public batch = [];

  constructor(private _batchDetails: BatchService) { }

  ngOnInit() {
    this._batchDetails.getBatchDetails().subscribe(data=>this.batch=data);
  }

}
