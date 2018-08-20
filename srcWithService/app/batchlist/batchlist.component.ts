import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit {

  public batchlist = [];
  constructor( private _batchservice: BatchService) { }

  ngOnInit() {
    this.batchlist = this._batchservice.getBatchDetails();
  }

}
