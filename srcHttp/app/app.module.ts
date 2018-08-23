import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { HttpClientModule } from '@angular/common/http';
import { BatchService } from './batch.service';


@NgModule({
  declarations: [
    AppComponent,
    HttpserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
