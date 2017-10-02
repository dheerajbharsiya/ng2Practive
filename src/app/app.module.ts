import { ServerService } from './core/server.service';
import { TextTransformPipe } from './common/textTransformPipe.pipe';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { HotListService } from './hotlists/hotlist/hotlist.service';
import { AppRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PipeTransform } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribsListComponent } from './cribs-list/cribs-list.component';
import { HeaderComponent } from './core/header/header.component';
import { HotlistComponent } from './hotlists/hotlist/hotlist.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotlistdescriptorComponent } from './core/hotlistdescriptor/hotlistdescriptor.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { FooterCribsComponent } from './core/footer-cribs/footer-cribs.component';
import { MyCartComponent } from './my-cart/my-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CribsListComponent,
    HeaderComponent,
    HotlistComponent,
    HotlistdescriptorComponent,
    LoginComponent,
    RegisterComponent,
    FooterCribsComponent,
    TextTransformPipe,
    MyCartComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [HotlistdescriptorComponent],
  providers: [HotListService, AuthService, AuthGuard, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
