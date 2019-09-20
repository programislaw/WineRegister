import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WinesComponent } from './wines/wines.component';
import { WineEditComponent } from './wines/wine-edit/wine-edit.component';
import { WineItemComponent } from './wines/wine-item/wine-item.component';
import { WineService } from './services/wine.service';
import { MatNativeDateModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WinesListComponent } from './wines/wines-list/wines-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WinesComponent,
    WineEditComponent,
    WineItemComponent,
    NavbarComponent,
    BreadcrumbComponent,
    WinesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [WineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
