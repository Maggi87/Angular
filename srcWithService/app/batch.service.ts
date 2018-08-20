import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor() { }

  getBatchDetails()
  {
    return [
      {"Name" : "MCA", "Fees": 75000, "Division" : "B"},
      {"Name" : "BCA", "Fees": 35000, "Division" : "A"},
      {"Name" : "MBA", "Fees": 130000, "Division": "B"},
      {"Name" : "BBA", "Fees": 45000, "Division" : "A"},
      {"Name" : "BCS", "Fees": 45000, "Division": "D"}
    ];
  }
}
