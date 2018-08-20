import { Component, OnInit } from '@angular/core';
import { BatchService } from 'src/app/batch.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent implements OnInit {

  public batch = [];

  constructor(private _batchDetails: BatchService) { }

  ngOnInit() {
    this.batch = this._batchDetails.getBatchDetails();
  }

}
