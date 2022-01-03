import { Component, OnInit } from '@angular/core';
// import rashifal from './rashifal.json';
// interface RASHIFAL { 
//   id: Number;
//   Date: Number;
//   Zodiac: String;
//   Description: String;
//   Action: String
// }


@Component({
  selector: 'app-update-daily',
  templateUrl: './update-daily.component.html',
  styleUrls: ['./update-daily.component.css']
})
export class UpdateDailyComponent implements OnInit {
  // title = 'Rashifal';
  // Rashifal: RASHIFAL[]= rashifal
  constructor() {
    // console.log(this.Rashifal)
   }

  ngOnInit(): void {
  }

}
