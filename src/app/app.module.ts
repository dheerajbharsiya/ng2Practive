import { AppRouting } from './app-routinng.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribsListComponent } from './cribs-list/cribs-list.component';
import { HeaderComponent } from './core/header/header.component';
import { HotlistComponent } from './hotlists/hotlist/hotlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CribsListComponent,
    HeaderComponent,
    HotlistComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
