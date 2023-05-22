import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuSubtitleComponent } from './components/menu-subtitle/menu-subtitle.component';
import { PrincipalCardComponent } from './components/principal-card/principal-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegularCardComponent } from './components/regular-card/regular-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuSubtitleComponent,
    PrincipalCardComponent,
    SmallCardComponent,
    FooterComponent,
    RegularCardComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
