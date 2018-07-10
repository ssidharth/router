import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsseeComponent } from './reactiveformssee.component';

describe('ReactiveformsseeComponent', () => {
  let component: ReactiveformsseeComponent;
  let fixture: ComponentFixture<ReactiveformsseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformsseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformsseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
