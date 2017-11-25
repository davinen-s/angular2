import { MediaItemService } from './../media-item/media-item-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems;

  constructor ( private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem){
    this.mediaItems = this.mediaItemService.delete(mediaItem);
  }

}
