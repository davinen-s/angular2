import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()// informs angular that this service need to be included in the dependency injection plan
export class MediaItemService {

  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);

    return this.http.get('mediaitems', {search: searchParams}).map(
      response => {
        return response.json().mediaItems;
      }
    );
  }

  add(mediaItem) {
    // this.mediaItems.push(mediaItem);
  }

  delete(mediaItem) {
  //   let index = this.mediaItems.indexOf(mediaItem);
  //   if (index >= 0) {
  //     this.mediaItems.splice(index, 1);
  //   }
  }
}