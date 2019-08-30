import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/components/signin/signin.component';
import {CustomMaterialModule} from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SignupComponent} from './auth/components/signup/signup.component';
import {TableModule} from 'primeng/table';
import {FieldsetModule, InputTextModule, ScrollPanelModule} from 'primeng/primeng';
import {ChatComponent} from './chat/chat.component';
import {AuthModule} from './auth/auth.module';
import * as fromApp from './store/app.reducers';
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {UserModule} from './user/user.module';
import {SharedModule} from './shared/shared.module';
import { EffectsModule} from '@ngrx/effects';
import {UserEffects} from './user/effects/user.effects';
import {RestService} from './core/services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthEffects} from './auth/effects/auth.effects';
import {TodoListEffects} from './todoList/effects/todoList.effects';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {SocketService} from './core/services/socket-service';
import {MessageService} from './core/services/message.service';
import {ChatEffects} from './chat-messages/effects/chat.effects';
import {ChatModule} from './chat-messages/chat.module';
const config: SocketIoConfig = { url: 'ws://localhost:8000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    FlexLayoutModule,
    TableModule,
    InputTextModule,
    FieldsetModule,
    ScrollPanelModule,
    AuthModule,
    HttpClientModule,
    UserModule,
    ChatModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([UserEffects, AuthEffects, TodoListEffects, ChatEffects]),
    SocketIoModule.forRoot(config)
  ],
  providers: [RestService, SocketService, MessageService],
  bootstrap: [AppComponent],
  exports: [
    CustomMaterialModule
  ]
})
export class AppModule { }
