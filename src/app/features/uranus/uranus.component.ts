import { Component } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.component.html',
  styleUrls: ['./uranus.component.scss'],
})
export class UranusComponent {
  public data: any;
  public setTimer: number = 1;

  constructor(private jsonService: JsonCallService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[6];
    });
  }
}
