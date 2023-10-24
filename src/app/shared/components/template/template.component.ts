import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  @Input() data: any;
  @Input() color: string = '';
  @Input() setTimer: number = 0;
  img: string = '';
  url: string = '';

  click(number: number) {
    this.setTimer = number;
    console.log(this.setTimer);
    if (number === 1) {
      this.img = this.data.images.planet;
      this.url = 'new-url-1';
    } else if (number === 2) {
      this.img = this.data.images.internal;
      this.url = 'new-url-2';
    } else if (number === 3) {
      this.img = this.data.images.planet;
      this.url = 'new-url-3';
    }
  }
}
