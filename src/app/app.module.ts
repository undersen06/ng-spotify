import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ROUTER } from './app.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';
// import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumsComponent } from './components/albums/albums.component'; 








@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent,
    NotFoundComponent,
    ArtistComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    ROUTER,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
