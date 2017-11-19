import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  constructor() { }

  onDelete() {
    this.delete.emit(this.mediaItem);
    console.log('deleted');
  }

}