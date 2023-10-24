import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercuryComponent } from './mercury/mercury.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VenusComponent } from './venus/venus.component';
import { TemplateModule } from 'src/app/shared/components/template/template.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';
import { UranusComponent } from './uranus/uranus.component';
import { NeptuneComponent } from './neptune/neptune.component';

@NgModule({
  declarations: [MercuryComponent, VenusComponent, EarthComponent, MarsComponent, JupiterComponent, SaturnComponent, UranusComponent, NeptuneComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    TemplateModule,
    HeaderModule,
  ],
})
export class FeaturesModule {}
