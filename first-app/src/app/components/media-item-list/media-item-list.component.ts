import { MediaItemService } from './../media-item/media-item-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  medium = '';
  mediaItems = [];

  constructor ( private mediaItemService: MediaItemService) {}

  ngOnInit() {
    // this.mediaItemService.get().subscribe(mediaItems => {
    //   this.mediaItems = mediaItems;
    // }) ;
    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem){
    this.mediaItemService.delete(mediaItem);
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium).subscribe(mediaItems => {
      this.mediaItems = mediaItems;
    }) ;
  }

}
