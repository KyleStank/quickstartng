import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardPageComponent } from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule {}
