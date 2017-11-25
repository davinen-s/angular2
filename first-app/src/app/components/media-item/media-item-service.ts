export class MediaItemService {

  get() {
    return this.mediaItems;
  }

  add(mediaItem) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
    let index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }

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
    id: 2,
    name: 'Firebugasdasdasdasdasdasdasd',
    medium: 'Movies',
    category: 'Horror',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  },
    {
    id: 3,
    name: 'Firebug',
    medium: 'Series',
    category: 'Comedie',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  },
    {
    id: 4,
    name: 'Firebug',
    medium: 'Series',
    category: 'Real Story',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  },
    {
    id: 5,
    name: 'Firebug',
    medium: 'Series',
    category: 'Action',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: true
  }
  ];

}