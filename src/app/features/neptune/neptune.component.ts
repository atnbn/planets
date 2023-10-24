import { Component } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-neptune',
  templateUrl: './neptune.component.html',
  styleUrls: ['./neptune.component.scss'],
})
export class NeptuneComponent {
  public data: any;
  public setTimer: number = 1;

  constructor(private jsonService: JsonCallService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[7];
    });
  }
}
