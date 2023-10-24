import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [CommonModule],
  exports: [TemplateComponent],
})
export class TemplateModule {}
