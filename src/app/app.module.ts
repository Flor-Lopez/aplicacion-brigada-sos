
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LlamadaEmergenciaComponent } from './pages/llamada-emergencia/llamada-emergencia.component';
import { RequieroImagenesComponent } from './pages/requiero-imagenes/requiero-imagenes.component';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { RequieroVideosComponent } from './pages/requiero-videos/requiero-videos.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { ChatbotComponent } from './components/chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    LlamadaEmergenciaComponent,
    RequieroImagenesComponent,
    VerificarEmailComponent,
    RecuperarPasswordComponent,
    RequieroVideosComponent,
    HomeComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
