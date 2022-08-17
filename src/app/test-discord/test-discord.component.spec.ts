import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDiscordComponent } from './test-discord.component';

describe('TestDiscordComponent', () => {
  let component: TestDiscordComponent;
  let fixture: ComponentFixture<TestDiscordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDiscordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDiscordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
