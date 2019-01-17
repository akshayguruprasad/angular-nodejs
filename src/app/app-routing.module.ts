import { PrizeComponent } from './prize/prize.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TCComponent } from './tc/tc.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { ReferComponent } from './refer/refer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tc', component: TCComponent },
  { path: 'event', component: EventsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'prizes', component: PrizeComponent },
  { path: 'refer', component: ReferComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
