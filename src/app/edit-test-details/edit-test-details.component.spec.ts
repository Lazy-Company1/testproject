import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestDetailsComponent } from './edit-test-details.component';

describe('EditTestDetailsComponent', () => {
  let component: EditTestDetailsComponent;
  let fixture: ComponentFixture<EditTestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTestDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
