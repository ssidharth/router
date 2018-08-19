import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadressComponent } from './formadress.component';

describe('FormadressComponent', () => {
  let component: FormadressComponent;
  let fixture: ComponentFixture<FormadressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormadressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
