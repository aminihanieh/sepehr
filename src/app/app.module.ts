import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { AirportsComponent } from './airports/airports.component';
import { DetailComponent } from './detail/detail.component';
import { TerminalsComponent } from './terminals/terminals.component';
import { HistoryComponent } from './history/history.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { ToFarsiPipe } from './pipes/to-farsi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AirportsComponent,
    DetailComponent,
    TerminalsComponent,
    HistoryComponent,
    LimitToPipe,
    ToFarsiPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
