import { Component } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss'],
})
export class MarsComponent {
  public data: any;
  public setTimer: number = 1;

  constructor(private jsonService: JsonCallService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[3];
    });
  }
}
