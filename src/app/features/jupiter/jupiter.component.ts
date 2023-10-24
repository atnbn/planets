import { Component } from '@angular/core';
import { JsonCallService } from 'src/app/shared/services/json-call.service';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.scss'],
})
export class JupiterComponent {
  public data: any;
  public setTimer: number = 1;

  constructor(private jsonService: JsonCallService) {}

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe((data) => {
      this.data = data[4];
    });
  }
}
