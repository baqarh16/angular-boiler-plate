import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from 'src/app/components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { TopHeaderComponent } from 'src/app/components/layout/top-header/top-header.component';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: MainComponent }
]

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    TopHeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
      RouterModule.forChild(routes),
      RouterModule,
      CommonModule,
      SharedModule
  ]
})
export class MainModule { }
