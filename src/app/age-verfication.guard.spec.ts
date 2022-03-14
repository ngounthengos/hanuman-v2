import { TestBed } from '@angular/core/testing';

import { AgeVerficationGuard } from './age-verfication.guard';

describe('AgeVerficationGuard', () => {
  let guard: AgeVerficationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AgeVerficationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
