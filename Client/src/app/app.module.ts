import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainService } from './services/main.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NetworkInterceptor } from './interceptors/network.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule

  ],
  providers: [MainService,
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor,multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor,multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
