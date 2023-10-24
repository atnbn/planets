import { Component } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.component.html',
  styleUrls: ['./saturn.component.scss'],
})
export class SaturnComponent {
  public data: any;
  public setTimer: number = 1;

  constructor(private jsonService: JsonCallService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[5];
    });
  }
}
