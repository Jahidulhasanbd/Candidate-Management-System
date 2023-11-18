import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModuleModule } from './modules/mat-module/mat-module.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { MasterComponent } from './components/master/master.component';
import { MasterViewComponent } from './components/master-view/master-view.component';
import { MasterEditComponent } from './components/master-edit/master-edit.component';
import { DataService } from './services/data.service';
import { NotifyService } from './services/notify.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MasterComponent,
    MasterViewComponent,
    MasterEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatModuleModule
  ],
  providers: [DataService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
