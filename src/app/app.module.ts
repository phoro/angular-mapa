import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvesModule } from './proves/proves.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProvesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
