import { TestBed } from '@angular/core/testing';

import { IcsSideMenuService } from './ics-side-menu.service';

describe('IcsSideMenuService', () => {
  let service: IcsSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcsSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
