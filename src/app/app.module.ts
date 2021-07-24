import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { ChevronCompactDown,ChevronCompactUp } from 'ng-bootstrap-icons/icons';
import { AppService } from './app.service'; 
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './sort.pipe';

const icons = {
  ChevronCompactDown,
  ChevronCompactUp
 };

@NgModule({
  declarations: [
    AppComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapIconsModule.pick(icons),
    HttpClientModule
   ],
   exports: [
    BootstrapIconsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
