import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynbinComponent } from './synbin.component';

describe('SynbinComponent', () => {
  let component: SynbinComponent;
  let fixture: ComponentFixture<SynbinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynbinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
