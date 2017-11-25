import { lookupListToken } from './../../providers';
import { MediaItemService } from './../media-item/media-item-service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'mw-reactive-media-item-form',
  templateUrl: './reactive-media-item-form.component.html',
  styleUrls: ['./reactive-media-item-form.component.css']
})
export class ReactiveMediaItemFormComponent implements OnInit {
  form;

  constructor(private formBuilder: FormBuilder, private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) {

  }


  ngOnInit() {
    this.form = new FormGroup({
      medium : new FormControl('Movies'),
      name : new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category : new FormControl(),
      year : new FormControl('', this.yearValidator)
    });
  }
//EXAMPLE OF FORMBUILDER.
  // ngOnInit() {
  //   this.form = this.formBuilder.group({
  //     medium : this.formBuilder.control('Movies'),
  //     name : this.formBuilder.control('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('[\\w\\-\\s\\/]+')
  //     ])),
  //     category : this.formBuilder.control(''),
  //     year : this.formBuilder.control('', this.yearValidator)
  //   });
  // }

  onSubmit(mediaItem) {
    console.log('submitted', mediaItem);
    this.mediaItemService.add(mediaItem);
  }

  yearValidator(control) {
    if (control.value.trim().length === 0 ) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1800;
    const maxYear = 2017;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear}};
    }

  }

}
