import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ListCardComponent } from './list-card/list-card.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import {FormsModule} from '@angular/forms';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent,
    ListCardComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MultiselectDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
