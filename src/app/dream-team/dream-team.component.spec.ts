import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { dreamTeamComponent } from './dream-team.component';

describe('dreamTeamComponent', () => {
  let component: dreamTeamComponent;
  let fixture: ComponentFixture<dreamTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ dreamTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(dreamTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
