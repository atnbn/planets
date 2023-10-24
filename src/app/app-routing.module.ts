import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercuryComponent } from './features/mercury/mercury.component';
import { VenusComponent } from './features/venus/venus.component';
import { EarthComponent } from './features/earth/earth.component';
import { MarsComponent } from './features/mars/mars.component';
import { JupiterComponent } from './features/jupiter/jupiter.component';
import { SaturnComponent } from './features/saturn/saturn.component';
import { UranusComponent } from './features/uranus/uranus.component';
import { NeptuneComponent } from './features/neptune/neptune.component';

const routes: Routes = [
  { path: '**', redirectTo: 'mercury', pathMatch: 'full' },
  { path: 'mercury', component: MercuryComponent },
  { path: 'venus', component: VenusComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'jupiter', component: JupiterComponent },
  { path: 'saturn', component: SaturnComponent },
  { path: 'uranus', component: UranusComponent },
  { path: 'neptune', component: NeptuneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
