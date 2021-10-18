import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCreationsComponent } from './basic-creations.component';

describe('BasicCreationsComponent', () => {
  let component: BasicCreationsComponent;
  let fixture: ComponentFixture<BasicCreationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCreationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
