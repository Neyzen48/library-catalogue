import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/opac/home/home.component';
import { ImpressumComponent } from './pages/opac/impressum/impressum.component';
import { PrivacyComponent } from './pages/opac/privacy/privacy.component';
import { SettingsComponent } from './pages/opac/settings/settings.component';
import { CatalogueComponent } from './pages/opac/catalogue/catalogue.component';
import { ConfigurationComponent } from './pages/dashboard/configuration/configuration.component';
import { OrdersComponent } from './pages/dashboard/orders/orders.component';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyComponent,
    SettingsComponent,
    CatalogueComponent,
    ConfigurationComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIcon,
    MatIcon,
    MatButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
