import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAYMENTComponent } from './payment.component';

describe('PAYMENTComponent', () => {
  let component: PAYMENTComponent;
  let fixture: ComponentFixture<PAYMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAYMENTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAYMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
