import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { BookingComponent } from './core/booking/booking.component';
import { HeroComponent } from './core/hero/hero.component';
import { HighlightsComponent } from './core/highlights/highlights.component';
import { AboutComponent } from './core/about/about.component';
import { SliderComponent } from './core/slider/slider.component';
import { MakeAReservationComponent } from './core/make-areservation/make-areservation.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    HeroComponent,
    HighlightsComponent,
    AboutComponent,
    SliderComponent,
    MakeAReservationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
