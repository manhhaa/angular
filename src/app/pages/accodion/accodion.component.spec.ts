import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccodionComponent } from './accodion.component';

describe('AccodionComponent', () => {
  let component: AccodionComponent;
  let fixture: ComponentFixture<AccodionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccodionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccodionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
