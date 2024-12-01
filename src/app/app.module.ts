import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LogoutComponent,
    LoginComponent
  ],
  providers: [
    provideAuth0({
      domain: 'dev-5vpssf11tqtla885.us.auth0.com',
      clientId: 'uccmmjZqONGWdpMAdWHo3sXr85QaYie8',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  
    provideHttpClient(),

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
