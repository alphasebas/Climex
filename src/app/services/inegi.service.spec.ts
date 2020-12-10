import { TestBed } from '@angular/core/testing';

import { InegiService } from './inegi.service';

describe('InegiService', () => {
  let service: InegiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InegiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
