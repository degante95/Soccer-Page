import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeamPlayersComponent } from './search-team-players.component';

describe('SearchTeamPlayersComponent', () => {
  let component: SearchTeamPlayersComponent;
  let fixture: ComponentFixture<SearchTeamPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeamPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeamPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
