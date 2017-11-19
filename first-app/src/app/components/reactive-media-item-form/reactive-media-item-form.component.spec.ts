import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveMediaItemFormComponent } from './reactive-media-item-form.component';

describe('ReactiveMediaItemFormComponent', () => {
  let component: ReactiveMediaItemFormComponent;
  let fixture: ComponentFixture<ReactiveMediaItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveMediaItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveMediaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
