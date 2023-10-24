import { Component, OnInit } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.scss'],
})
export class MercuryComponent implements OnInit {
  public data: any;
  public setTimer: number = 1;

  constructor(private jsonService: JsonCallService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[0];
    });
  }
}
