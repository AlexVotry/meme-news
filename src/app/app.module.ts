import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { ModalComponent } from './modal/modal.component';
import { BroadcasterModalService } from './service/data.service';
import { MemesService } from './memes/memes.service';


@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [BroadcasterModalService, MemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
