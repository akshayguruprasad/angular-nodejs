import { SafePipe } from './events/SafePipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ReferComponent } from './refer/refer.component';
import { PrizeComponent } from './prize/prize.component';
import { TCComponent } from './tc/tc.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FloaterMenuComponent } from './floater-menu/floater-menu.component';
import { FloaterScrollerComponent } from './floater-scroller/floater-scroller.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TempcComponent } from './tempc/tempc.component';
import { FootComponent } from './foot/foot.component';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    AboutComponent,
    RegisterComponent,
    ReferComponent,
    PrizeComponent,
    TCComponent,
    HeaderComponent,
    FooterComponent,
    FloaterMenuComponent,
    FloaterScrollerComponent,
    ScheduleComponent,
    SafePipe,
    TempcComponent,
    FootComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ HomeComponent,
    EventsComponent,
    AboutComponent,
    RegisterComponent,
    ReferComponent,
    PrizeComponent,
    TCComponent,
    HeaderComponent,
    FooterComponent,
    FloaterMenuComponent,
    FloaterScrollerComponent,SafePipe]
})
export class AppModule { }
