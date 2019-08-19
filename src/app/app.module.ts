import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import {CustomMaterialModule} from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SignupComponent} from './signup/signup.component';
import {TableModule} from 'primeng/table';
import {FieldsetModule, InputTextModule, ScrollPanelModule} from 'primeng/primeng';
import {ChatComponent} from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    TableModule,
    InputTextModule,
    FieldsetModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
