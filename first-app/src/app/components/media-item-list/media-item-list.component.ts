import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems = [
    {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  },
    {
    id: 1,
    name: 'Firebugasdasdasdasdasdasdasd',
    medium: 'Movies',
    category: 'Horror',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  },
    {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Comedie',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  },
    {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Real Story',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  },
    {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Action',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  }
  ];

  onMediaItemDelete(mediaItem){ }

}
