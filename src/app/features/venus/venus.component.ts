import { Component, OnInit } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.scss'],
})
export class VenusComponent implements OnInit {
  constructor(private jsonService: JsonCallService) {}
  data: any;
  public setTimer: number = 1;
  ngOnInit(): void {
    console.log('test');
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[1];
    });
  }
}
