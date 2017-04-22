import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CustomToastrErrorHandler } from 'app/common/customtoastr.errorhandler';
import { AppLogger } from 'app/common/common.logger';
import { ConsoleLogger } from 'app/common/console.loggerservice';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    ToastModule.forRoot()
  ],
  providers: [{provide: ErrorHandler, useClass: CustomToastrErrorHandler}, {provide: AppLogger, useClass: ConsoleLogger}],
  bootstrap: [AppComponent]
})
export class AppModule { }
