import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringDateComponent } from './string-date.component';

describe('StringDateComponent', () => {
  let component: StringDateComponent;
  let fixture: ComponentFixture<StringDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
