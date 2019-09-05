import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShotennPipePipe } from './shotenn-pipe.pipe';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [
    AppComponent,    
    PipesComponent,
    ShotennPipePipe,
    FilterPipe,
    ReversePipe,
    ShortPipe
  ],
  imports: [
    BrowserModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
