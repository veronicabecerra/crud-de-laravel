import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TriviaGameComponent } from './trivia-game/trivia-game.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'trivia', component: TriviaGameComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { HttpClient } from 'selenium-webdriver/http';


const oktaConfig = {
  issuer: '{YourIssuerURL}',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{yourClientId}'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TriviaGameComponent
  ],

  imports: [
    BrowserModule,
    HttpClient,
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(oktaConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
