import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuilddirectiveComponent } from './inbuilddirective.component';

describe('InbuilddirectiveComponent', () => {
  let component: InbuilddirectiveComponent;
  let fixture: ComponentFixture<InbuilddirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InbuilddirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuilddirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
