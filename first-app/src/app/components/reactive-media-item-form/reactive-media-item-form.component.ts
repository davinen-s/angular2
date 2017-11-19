import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'mw-reactive-media-item-form',
  templateUrl: './reactive-media-item-form.component.html',
  styleUrls: ['./reactive-media-item-form.component.css']
})
export class ReactiveMediaItemFormComponent implements OnInit {
  form;


  ngOnInit() {
    this.form = new FormGroup({
      medium : new FormControl('Movies'),
      name : new FormControl(),
      category : new FormControl(),
      year : new FormControl()
    });
  }

  onSubmit(mediaItem){
    console.log('submitted', mediaItem);
  }

}
