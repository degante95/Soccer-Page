import { TestBed } from '@angular/core/testing';

import { DreamTeamService } from './dream-team.service';

describe('DreamTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DreamTeamService = TestBed.get(DreamTeamService);
    expect(service).toBeTruthy();
  });
});
