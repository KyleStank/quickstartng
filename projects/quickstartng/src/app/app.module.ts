import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

const dynamicProviders: Provider[] = [];
if (environment.local) {
  dynamicProviders.push({ provide: LocationStrategy, useClass: HashLocationStrategy });
}

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [AppComponent],
  providers: [...dynamicProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
