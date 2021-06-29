import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '@app/environments';
import { FootersModule, HeadersModule, LayoutsModule } from '@app/features';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const dynamicProviders: Provider[] = [];
if (environment.local) {
  dynamicProviders.push({ provide: LocationStrategy, useClass: HashLocationStrategy });
}

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FootersModule,
    HeadersModule,
    LayoutsModule
  ],
  declarations: [AppComponent],
  providers: [...dynamicProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
