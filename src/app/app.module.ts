import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import {HomeService } from './shared/home.service'
import {HomeComponent} from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
