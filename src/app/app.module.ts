import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsComponent } from './components/comics/comics.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ListElementsComponent } from './components/listelements/listelements.component';
import { SearchComponent } from './components/search/search.component';
import { ComicComponent } from './components/comic/comic.component';
import { CharacterComponent } from './components/character/character.component';

import { CharacterService } from './services/characterService.service';
import { ComicService } from './services/comicService.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ComicsComponent,
    CharactersComponent,
    ListElementsComponent,
    SearchComponent,
    CharacterComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'characters', component: CharactersComponent },
        { path: 'character/:id', component: CharacterComponent },
        { path: 'comics', component: ComicsComponent },
        { path: 'comic/:id', component: ComicComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
