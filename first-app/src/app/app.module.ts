import { lookupListToken, lookupLists } from './providers';
import { MediaItemService } from './components/media-item/media-item-service';
import { CategorylistPipe } from './category-list.pipe';
import { FavoriteDirective } from './favorite.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './components/media-item-form/media-item-form.component';
import { ReactiveMediaItemFormComponent } from './components/reactive-media-item-form/reactive-media-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategorylistPipe,
    MediaItemFormComponent,
    ReactiveMediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MediaItemService,
  { provide: lookupListToken, useValue: lookupLists}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
