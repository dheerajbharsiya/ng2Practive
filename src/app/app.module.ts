import { HotListService } from './hotlists/hotlist/hotlist.service';
import { AppRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribsListComponent } from './cribs-list/cribs-list.component';
import { HeaderComponent } from './core/header/header.component';
import { HotlistComponent } from './hotlists/hotlist/hotlist.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotlistdescriptorComponent } from './core/hotlistdescriptor/hotlistdescriptor.component';
import { LoginComponent } from './core/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CribsListComponent,
    HeaderComponent,
    HotlistComponent,
    HotlistdescriptorComponent,
    LoginComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [HotlistdescriptorComponent],
  providers: [HotListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
